

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

module.exports= requestJson;

