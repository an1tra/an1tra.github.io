require("dotenv").config();
var axios = require("axios");
var moment = require('moment');

//var keys = require("./keys.js");
//var spotify = new Spotify(keys.spotify);
//

/*
// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: '78b3a768a6b0482eae546ef0cbf02748',
  clientSecret: 'a5f3a0deb8c74a479e7d5f10f165ddef',
  redirectUri: 'https://oauth.io/auth'
});*/




var command = process.argv[2];

switch(command) {
    case "concert-this":
        concertThis();
    break;
    case "spotify-this-song":
        spotifyThisSong();
    break;
    case "movie-this":
        movieThis();
    break;
    case "do-what-it-says":
        doWhatItSays();
    break;
}

function concertThis() {

    var artist = process.argv[3];
    console.log(artist);
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp&market=US").then(
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
  var track= "'"+process.argv[3]+"'";

  var SpotifyWebApi = require('spotify-web-api-node');
  
  var spotifyApi = new SpotifyWebApi({
    clientId: '78b3a768a6b0482eae546ef0cbf02748',
    clientSecret: 'a5f3a0deb8c74a479e7d5f10f165ddef',
    accessToken: 'BQCQS6hIAeuxvzHIvdDHVbbsMjzR0ru_fSDr2EyS-mR8Eza6nz-oOYepC1_kO3AgwY_6pMir9eXvTiD-ia8'
  });
  
  spotifyApi.clientCredentialsGrant().then(
    function(data) {
      console.log('The access token expires in ' + data.body['expires_in']);
      console.log('The access token is ' + data.body['access_token']);
  
      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body['access_token']);
    },
    function(err) {
      console.log(
        'Something went wrong when retrieving an access token',
        err.message
      );
    }
  );
  
  // Do search using the access token
  spotifyApi.searchTracks('track:'+track).then(
    function(data) {
      //console.log(data.body.tracks.items[0].artists[0].name);
      for(var i = 0; i < 20; i++){
        console.log("Artist(s): "+data.body.tracks.items[i].artists[0].name);
        console.log("Song Name: "+ data.body.tracks.items[i].name);
        console.log("Preview URL: "+ data.body.tracks.items[i].preview_url);
      }
      
    },
    function(err) {
      console.log('Something went wrong!', err);
    }
  );

    
}

function movieThis() {
    var movie = process.argv[3];
    axios.get("http://www.omdbapi.com/?t="+movie+"&y=&plot=short&apikey=trilogy").then(
  function(response) {
    console.log(response.data.Title);
    console.log(response.data.Year);
    console.log(response.data.imdbRating);
    console.log(response.data.Ratings[1]);
    console.log(response.data.Country);
    console.log(response.data.Language);
    console.log(response.data.Plot);
    console.log(response.data.Actors);
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

function doWhatItSays() {
    var fs = require("fs");

    var text = fs.readFile("random.txt", "utf8", function(err, data) {
        if (err) {
          return console.log(err);
        }
    })

    fs.appendFile("log.txt", text, function(err) {

    // If an error was experienced we will log it.
        if (err) {
            console.log(err);
            }

  // If no error is experienced, we'll log the phrase "Content Added" to our node console.
        else {
            console.log("Content Added!");
            }


        });
    }