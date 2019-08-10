const express = require('express');
const scraper = require('./stuff')
const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Scraping is Fun!'
  })
});

app.get('/search/:title', (req, res) => {
  scraper
    .search(req.params.title)
    .then(searchItems => {
      res.json(searchItems);
    })
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
  console.log(`Listening on ${port}`);
})
