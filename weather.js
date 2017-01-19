/*Ask the user for their location
Retrieve the weather for the user's location
Display the current weather as well as the next 5 days weather in a nice way
*/


var prompt = require("prompt");
var requestJSON = require('./request-as-json.js');
var colors = require("colors");
var emoji = require("node-emoji");

prompt.start();
prompt.get("userLocation", function(err, userResult) {
    if (err) {
        console.log("This is not the right prompt", err);
    }
    else {
        console.log("Your location is: " + userResult.userLocation);
        requestJSON("https://maps.googleapis.com/maps/api/geocode/json?address=" +
            userResult.userLocation,
            function(errorOne, resultOne) {
                if (errorOne) {
                    console.log("this is user location error" + errorOne);
                    console.log(errorOne)
                }
                else {
                    var userLat = resultOne.results[0].geometry.location.lat;
                    var userLng = resultOne.results[0].geometry.location.lng;

                    requestJSON("https://api.darksky.net/forecast/4f673c03269c3993eea7f92b5b4f2ee5/" + userLat + "," + userLng, function(errorTwo, resultTwo) {
                        if (errorTwo) {
                            console.log("this is weather app error" + errorTwo);
                        }
                        else {
                            var dailyData = resultTwo.daily.data;
                            console.log("Weather are generally ".america + resultTwo.currently.summary);
                            for (var i = 0; i < 5; i++) {
                                console.log("In " + (i + 1) + " days, weather will be " + dailyData[i].icon.rainbow);
                            }
                        }
                    });
                }
            });
    }
});
