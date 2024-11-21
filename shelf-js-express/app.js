const express = require('express')
const app = express()
const port = 3000
const jsdom = require("jsdom")
const { JSDOM } = jsdom
const fs = require('node:fs');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://itshichabk:guo6yzM0gZuxYiSx@cluster0.a5kas.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

var cors = require('cors');
app.use(cors());

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const insertToDB = async (req, type) => {
  try {
    await client.connect();
    const db = client.db("shelf_js");
    const historique = db.collection("historique");

    const doc = {
      text: req.query.search,
      type: type
    }

    const result = await historique.insertOne(doc);
    return result.insertedId;
  }
  catch(e) {
    console.log(e);
  }
  finally {
    await client.close();
  }
}

app.get('/api/data', (req, res) => {
  res.send('Hello World!')
})

app.get("/livres", async (req, res) => {

  const livres = [];
  const url = "https://www.renaud-bray.com/Recherche.aspx?langue=fr&words=" + req.query.search + "&wbgc_iNo=1906&type=1&root=1906&supersection=2&pSize=25";

  const rbFetch = await fetch(url);
  const rbRes = await rbFetch.text();

  const { document } = (new JSDOM(rbRes)).window;

  const titles = document.querySelectorAll(".pRowCtrl .lblTitle");
  const authors = document.querySelectorAll(".pRowCtrl .lblAuthor");
  const images = document.querySelectorAll(".pRowCtrl .cover a img"); 

  for(let i = 0; i < titles.length; i++)
  {
    if(i == 0 || (i > 0 && titles[i].innerHTML != titles[i-1].innerHTML))
    {
      livres.push({
        title: titles[i].innerHTML,
        author: authors[i].innerHTML,
        image: images[i].src
      });
    }
  }

  await insertToDB(req, "livre");
  res.send(JSON.stringify(livres));
})

app.post("/delete", async (req, res) => {
  try {
    await client.connect();
    const db = client.db("shelf_js");
    const historique = db.collection("historique");

    const query = { "text": req.query.text, "type": req.query.type };
    const result = await historique.deleteMany(query);

    if (result.deletedCount === 1) {
      res.send(JSON.stringify("Supprimé 1 élément de l'historique."));
    } else {
      res.send(JSON.stringify("Aucun élément correspondant. Supprimé 1 élément de l'historique."));
    }
  }
  catch(e) {
    console.log(e);
  }
  finally {
    await client.close();
  }
})

app.get("/historique", async (req, res) => {
  try {
    await client.connect();
    const db = client.db("shelf_js");
    const historique = db.collection("historique");

    const cursor =  historique.find();
    let results = []

    for await(const doc of cursor) {
      results.push(doc);
    }

    res.send(JSON.stringify(results));
  }
  catch(e) {
    console.log(e);
  }
  finally {
    await client.close();
  }
})

app.get("/films", async (req, res) => {

  const films = [];
  const url = "https://www.imdb.com/find/?q=" + req.query.search;

  const imdbFetch = await fetch(url);
  const imdbRes = await imdbFetch.text();

  const { document } = (new JSDOM(imdbRes)).window;

  const titles = document.querySelectorAll(".find-title-result a")
  const actors = document.querySelectorAll(".ipc-page-section:nth-of-type(2) .ipc-metadata-list-summary-item__stl span");
  const images = document.querySelectorAll(".ipc-page-section:nth-of-type(2) .ipc-media");

  for(let i = 0; i < titles.length; i++)
  {
    const img = images[i].querySelector("img");

    films.push({
      title: titles[i].innerHTML,
      author: actors[i] ? actors[i].innerHTML : "n/a",
      image: img ? img.src : ""
    });
  }

  const id = await insertToDB(req, "film");

  const result = {
    id: id,
    data: films
  }

  res.send(JSON.stringify(result));
})

app.get("/jeux", async (req, res) => {
  const jeux = await fetch("https://www.jeuxvideo.com/rechercher.php?q=" + req.query.search);
  const jeuxRes = await jeux.text();

  const { document } = (new JSDOM(jeuxRes)).window;
  
  const posts = []
  
  const titles = document.querySelectorAll(".bloc-full-contenu section:nth-of-type(1) .card__link")
  const images = document.querySelectorAll(".bloc-full-contenu section:nth-of-type(1) .card-img-top")
  
  for(let i = 0; i < titles.length; i++) {
    if (i === 30) {
        break
    }
      posts.push({
          title: titles[i].innerHTML,
          image: images[i].getAttribute('data-src'),
        })
  }

  const id = await insertToDB(req, "jeu");

  const result = {
    id: id,
    data: posts
  }

  res.send(JSON.stringify(result));
})

app.get("/albums", async (req, res) => {
  const albums = await fetch("https://www.qobuz.com/ca-fr/search/albums/" + req.query.search);
  const albumsRes = await albums.text();

  const { document } = (new JSDOM(albumsRes)).window;
  
  const posts = []
  
  const titles = document.querySelectorAll(".ReleaseCardInfos .ReleaseCardInfosTitle")
  const author = document.querySelectorAll(".ReleaseCardInfosSubtitle a")
  const images = document.querySelectorAll(".CoverModel")

  for(let i = 0; i < titles.length; i++) {
      if (i === 30) {
          break
      }
      posts.push({
          title: titles[i].innerHTML,
          author: author[i].innerHTML,
          image: images[i].getAttribute('data-src'),
        })
   }

   const id = await insertToDB(req, "album");

   const result = {
     id: id,
     data: posts
   }
 
   res.send(JSON.stringify(result));
})


app.get("/musiques", async (req, res) => {
    const musique = await fetch("https://www.qobuz.com/ca-fr/search/tracks/" + req.query.search);
    const musiqueRes = await musique.text();
  
    const { document } = (new JSDOM(musiqueRes)).window;
    
    const posts = []
    
    const titles = document.querySelectorAll(".ListItem__title")
    const images = document.querySelectorAll(".ListItem__cover")
  
    for(let i = 0; i < titles.length; i++) {
        if (i === 30) {
            break
        }
        posts.push({
            title: titles[i].innerHTML,
            image: images[i].getAttribute('data-src'),
        })
    }
  
    const id = await insertToDB(req, "musique");

    const result = {
      id: id,
      data: posts
    }
  
    res.send(JSON.stringify(result));
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})