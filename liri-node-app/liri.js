require("dotenv").config();

var keys = require("./keys");

//var spotify = new Spotify(keys.spotify);

var command = process.argv[2];

switch(command) {
    case "concert-this":
        concertThis();
    break;
    case "spotify-this-song":
        console.log("Spotify This Song");
    break;
    case "movie-this":
        console.log("Movie This");
    break;
    case "do-what-it-says":
        console.log("Do what it says");
    break;
}

function concertThis() {
    var axios = require("axios");
    var moment = require('moment');
    var artist = process.argv[3];
    console.log(artist);
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
      function(response) {
        var date = response.data[0].datetime;
        console.log(response.data[0].venue.name);
        console.log(response.data[0].venue.city);
        console.log(moment(date).format("MM/DD/YYYY"));
      })
         .catch(function(error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("---------------Data---------------");
          console.log(error.response.data);
          console.log("---------------Status---------------");
          console.log(error.response.status);
          console.log("---------------Status---------------");
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an object that comes back with details pertaining to the error that occurred.
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
}

function spotifyThisSong() {
    
}



