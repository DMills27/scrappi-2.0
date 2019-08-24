const fetch = require('node-fetch');
const cheerio = require('cheerio');
const TfIdf = require('node-tfidf');
const tfidf = new TfIdf();

tfIdf = {};
concordance = {};
textString = " ";

const urls = "google"

function scrape(url){
  return fetch(`https://www.${url}.com`)
    .then(response => response.text())
    .then(body => {
      const $ = cheerio.load(body);

      function getItems(itemArr){
        return function(i, element){
          const item = $(element).text().trim().split(/\s+/);
          for(var i=0; i < item.length; i++){
            textString += item[i] + " ";
            if (concordance[item[i]] === undefined){
              concordance[item[i]] = 1
            }else{
              concordance[item[i]]++;
            }
          }
      }
    }
      const totaltext = [];
      $('*').each(getItems(totaltext));
      conKeys = Object.keys(concordance);
      tfidf.addDocument(textString);
      for(var j = 0; j < conKeys.length; j++){
        tfidf.tfidfs(conKeys[j], function(k, measure){
          // console.log('Keyword ' + conKeys[j]  +' document #' + k + ' is ' + measure );
           TfIdf[conKeys[j]] = measure;
        });
      }
      return {
        totaltext,
        concordance,
        TfIdf
      };

    });

}
//search(urls);

module.exports = {
  scrape
}
