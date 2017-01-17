/*In your function, do the following:
Using the request library, make a request to the URL that you were provided.
When you receive the response: a. If there is an error, call the callback function and pass it the error as the first parameter b. If there is no error, move to step 3
Use JSON.parse inside a try/catch block to parse the response: a. If there was an error parsing JSON, call the callback function and pass it the same error as the first parameter b. If there was no error parsing the JSON, call the callback function and pass it a null error as the first parameter, and the parsed response as the second parameter
*/

var url = "http://en.wikipedia.org/w/api.php?action=parse&format=json&callback=?";

var request = require('request');

function requestJson(url, callback){
    request(url, function(err, response) {
        if (err) {
            callback(err)
        }
        else {
            try {
                var searchResults = JSON.parse(response.body)
                callback(null, searchResults)
            }
            catch (err) {
                callback(err)
            }
        }
    })
}


