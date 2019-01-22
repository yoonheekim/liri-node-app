# liri-node-app

## Overview
1. LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.
2. LIRI can search `Spotify` for songs, `Bands in Town` for concerts, and `OMDB` for movies.
    * using the axios package to the Bands in Town, Spotify and OMDB APIs

## Technologies
> Node-Spotify-API, OMDB API, the Bands In Town API, Axios, DotEnv, Node.js

## 4 Command
1. concert-this
    * This will search the Bands in Town Artist Events API  for an artist and render the following information about each event to the terminal:
    ```
        * Name of the venue
        * Venue location
        * Date of the Event (use moment to format this as "MM/DD/YYYY")
    ```

    * Screenshot


2. spotify-this-song
    * This will show the following information about the song in your terminal/bash window
    ```
        * Artist(s)
        * The song's name
        * A preview link of the song from Spotify
        * The album that the song is from
    ```
    * If no song is provided then your program will default to `The Sign` by Ace of Base.
    * Screeshot

3. movie-this
    * This will output the following information to your terminal/bash window:
```
   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.
```
   * If the user doesn't type a movie in, the program will output data for the movie `Mr. Nobody`
   * Screenshot

4. do-what-it-says
    * Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
    * It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt. Edit the text in random.txt to test out the feature for movie-this and concert-this.
    * Screenshot

## log.txt
1. In addition to logging the data to your terminal/bash window, output the data to a .txt file called `log.txt`
2. append each command you run to the log.txt file.


### etc
1. `run npm init -y —` 
    * this will initialize a package.json file
    * The package.json file is required for installing third party npm packages and saving their version numbers
2. `.gitignore` file 
    * This will tell git not to track these files, and thus they won't be committed to Github.
3. `keys.js`, `.env`
    * be used by the dotenv package to set what are known as environment variables to the global process.env object in node. These are values that are meant to be specific to the computer that node is running on, and since we are gitignoring this file, they won't be pushed to github — keeping our API key information private.
    * If someone wanted to clone your app from github and run it themselves, they would need to supply their own .env file for it to work.

