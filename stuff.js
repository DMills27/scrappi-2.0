const fetch = require('node-fetch')
const cheerio = require('cheerio')

function search(url){
  return fetch(`https://www.${url}.com`)
    .then(response => response.text())
    .then(body => {
      const $ = cheerio.load(body);

      const totaltext = [];
      $('*').each(function(i, element) {
        const searchItem = $(element).text().replace(/\s+/g, " ").trim();
        if(searchItem.length > 0){
            totaltext.push(searchItem);
        }
      })
      const paragraphs = [];
      $('p').each(function(i, element){
        const paragraph = $(element).text().replace(/\s+/g, " ").trim();
        if(paragraph.length > 0){
            paragraphs.push(paragraph);
        }
      });

      return {
        totaltext,
        paragraphs
      };
    });

    }
module.exports = {
  search
}
