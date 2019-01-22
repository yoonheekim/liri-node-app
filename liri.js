require("dotenv").config();


var keys = require("./keys.js");
var axios = require("axios");
var fs = require('fs');

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var command = process.argv[2]; 
var names = process.argv[3];


function readCommand(){
    switch(command){
        case "concert-this":
            concert_this();
            break;
        case "spotify-this-song":
            spotify_this_song();
            break;
        case "movie-this":
            movie_this();
            break;
        case "do-what-it-says":
            do_what_it_says();
            break;
    }
}


function concert_this(){

}

// Spotify
function spotify_this_song(){
    //Search for names variable
    if(!names){
        console.log("No song, defualt song will be displayed")
        names = 'the sign';
        // spotify
        // .request('https://api.spotify.com/v1/search?q=track%3Athe%20sign%20artist%3AAce%20of%20Base&type=track')
        // .then(function(data) {
            
        //     console.log("Artist : "+data.tracks.items[0].artists[0].name); 
        //     console.log("The song's name : "+data.tracks.items[0].name); 
        //     console.log("A preview link of the song : "+data.tracks.items[0].preview_url);
        //     console.log("The album that the song is from : "+data.tracks.items[0].album.name); 
        // })
        // .catch(function(err) {
        //     console.error('Error occurred: ' + err); 
        // });
        
    //
    } 

    spotify.search({ type: 'track', query: names }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        var resultLog = "Artist : "+data.tracks.items[0].artists[0].name+"\n"+
                        "The song's name : "+data.tracks.items[0].name+"\n"+
                        "A preview link of the song : "+data.tracks.items[0].preview_url+"\n"+
                        "The album that the song is from : "+data.tracks.items[0].album.name+"\n"+
                        "============================================="+"\n"
        console.log(resultLog); 
        writeLog(resultLog);

    });


}
//OMDB API
function movie_this(){
    if(!names){
        names = "Mr. Nobody"
    }
    var queryUrl = "http://www.omdbapi.com/?t=" +names+"&y=&plot=short&apikey=trilogy";
    axios.get(queryUrl).then((response) => {
        //console.log(response.data);
        var resultLog = "Title : "+response.data.Title+"\n"+
                        "Year : "+response.data.Year+"\n"+
                        "IMDB Rating : "+response.data.imdbRating+"\n"+
                        "Rotten Tomatoes Rating : "+response.data.Ratings[1].Value+"\n"+
                        "Produced Country : "+response.data.Country+"\n"+
                        "Language : "+response.data.Language +"\n"+
                        "Plot : "+response.data.Plot+"\n"+
                        "Actors: "+response.data.Actors+"\n"+
                        "=============================================\n"

        console.log(resultLog);
        writeLog(resultLog);

    }).catch((err) => {
        console.log('Error occurred: ' + err);
    });

//     * Title of the movie.
//    * Year the movie came out.
//    * IMDB Rating of the movie.
//    * Rotten Tomatoes Rating of the movie.
//    * Country where the movie was produced.
//    * Language of the movie.
//    * Plot of the movie.
//    * Actors in the movie.


}
function do_what_it_says(){
    fs.readFile("random.txt", "utf8", function(err, data){
        if(err){
            console.log('Error occurred: ' + err);
        }

        var readTxt = data.split(",");
        command = readTxt[0];
        names = readTxt[1]
        
        readCommand();


    });
}

function writeLog(text){
    fs.appendFile("log.txt", text, function(err) {

        // If an error was experienced we will log it.
        if (err) {
          console.log('Error occurred: ' + err);
        }
      
        // If no error is experienced, we'll log the phrase "Content Added" to our node console.
        else {
          console.log("Content Added to log.txt");
        }
      
      });
}

readCommand();