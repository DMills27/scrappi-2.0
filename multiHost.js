const scraper = require('./singleHost');
//const urls = ['google', 'github'];
const websites = [];

function multiSearch(urls){
  for(var i = 0; i < urls.length; i++){
    websites.push(scraper.search(urls[i]));
  }
  return Promise.all(websites);
}

// async function tf(terms){
//    const ret = await multiSearch(terms);
//    //console.log(JSON.stringify(ret[1]));
//    return ret;
//    //console.log("this is ret[1]", ret[1]);
// }

module.exports = {
  multiSearch,
  // tf
}
//multiSearch(urls);
