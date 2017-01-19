/* Create a file get-synonyms.js at the root of your project
Import your module and create an instance using your API key
Prompt the user for a word
Using your API, retrieve the synonyms/antonyms/etc. for the input word
If everything goes well, display all the results to the user in a nice way */

var prompt = require("prompt");
var SynonymAPI = require('./library/synonyms.js');
var apikey = "4a4560ece2ff83e19c8d386cf91fc6c2"

var table = require("cli-table");
var emoji = require("node-emoji");

prompt.get(["User"], function(error, result) {
    if (error) {
        console.log("This is" + error)
    }
    else {
        var word = result.User
        var synGetter = new SynonymAPI(apikey)

        synGetter.getSynonyms(word, function(err, response) {
            if (err) {
                console.error('Get Syn Error', err)
            }
            else {
                console.log(response)
                var Table = new table();
                table.push({
                    'Some key': 'Some value'
                }, {
                    'Another key': 'Another value'
                });

            }
        })
    }
})
