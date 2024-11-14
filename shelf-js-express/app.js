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

  res.send(JSON.stringify(livres));
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

  res.send(JSON.stringify(films));
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})