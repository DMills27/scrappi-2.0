const scraper = require('./singleHost');
//const urls = ['google', 'github'];
const websites = [];

function multiSearch(urls){
  for(var i=0; i<urls.length; i++){
    websites.push(scraper.search(urls[i]).then(item => item));
  }
  return Promise.all(websites).then(results => (results));
}

module.exports = {
  multiSearch
}
//multiSearch(urls);
