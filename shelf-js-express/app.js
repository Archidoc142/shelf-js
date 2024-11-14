const express = require('express')
const app = express()
const port = 3000
const jsdom = require("jsdom")
const { JSDOM } = jsdom
const fs = require('node:fs');

var cors = require('cors');
app.use(cors());

app.get('/api/data', (req, res) => {
  res.send('Hello World!')
})

app.get("/reddit", async (req, res) => {
    const reddit = await fetch("https://old.reddit.com/r/ProgrammerHumor");
    const redditRes = await reddit.text();

    const { document } = (new JSDOM(redditRes)).window;
    
    const posts = []
    
    const titles = document.querySelectorAll("a.title")

    const images = document.querySelectorAll(".thumbnail img")
    const authors = document.querySelectorAll(".entry .author") 

    for(let i = 0; i < titles.length; i++)
    {
        posts.push({
            title: titles[i].innerHTML,
            image: images[i].src,
            author: authors[i].innerHTML
        })
    }

    res.send(JSON.stringify(posts));
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

  res.send(JSON.stringify(posts));
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

  res.send(JSON.stringify(posts));
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
  
    res.send(JSON.stringify(posts));
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})