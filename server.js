const express = require('express');
const scraper = require('./singleHost')
//const scraper2 = require('./multiHost')
const app = express();

app.use(express.static('static_files'));
// GET a list of all sites to scrape
//
// To test, open this URL in your browser:
//   http://localhost:3000/search?array=google&array=facebook
app.get('/search/:title', (req, res) => {
  scraper.search(req.params.title).then(SearchItems =>res.send(SearchItems));
  console.log(req.params.title);
  // scraper2.multiSearch(req.query.array).then(SearchItems =>res.send(SearchItems));
  // console.log(req.query.array);
});

// start the server at URL: http://localhost:3000/
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});
