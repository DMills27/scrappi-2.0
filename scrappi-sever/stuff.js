const fetch = require('node-fetch')
const cheerio = require('cheerio')

concordance = {};

function search(url){
  return fetch(`https://www.${url}.com`)
    .then(response => response.text())
    .then(body => {
      const $ = cheerio.load(body);

      function getItems(itemArr){
        return function(i, element){
          // const item = $(element).text().replace(/\s+/g, " ").trim();
          const item = $(element).text().trim().split(/\s+/);
          if (item.length > 0 || item != " "){
            itemArr.push(item);
            for(var i=0; i< item.length; i++){
              //console.log(` item is: ${item[i]}`);
              if (concordance[item[i]] === undefined){
                concordance[item[i]] = 1
              }else{
                concordance[item[i]]++;
              }
            }
          }
        }
      }

      const totaltext = [];
      $('*').each(getItems(totaltext));

      return {
        totaltext,
        concordance
      };

    });

    }
module.exports = {
  search
}
