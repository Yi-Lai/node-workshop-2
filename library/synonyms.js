/*In this file, create and export a constructor function called SynonymAPI. It takes an api key as parameter and sets it on the new object
In the prototype of SynonymAPI, add a function getSynonyms. It takes a word and a callback. It makes a request to the web api and gives back the results as an object to the callback function.
If there was an error, it should be passed down to the callback*/

var request = require('request');

function SynonymAPI(key){
    this.key = key;
}

SynonymAPI.prototype.getSynonyms = function(word, callback) {

    //http://words.bighugelabs.com/api/{version}/{api key}/{word}/{format}
    request("http://words.bighugelabs.com/api/2/" + this.key + "/" + word + "/", function(error, result) {
        if (error) {
            callback(error);
        }
        else {
            var r = result.body;
                if(typeof result !== 'object') {
                    r = JSON.parse(result.body);
                }
                callback(null, r);
            }
        }
)}


module.exports = SynonymAPI;
