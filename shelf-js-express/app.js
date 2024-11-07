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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})