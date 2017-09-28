// Dependencies =========================
var twit = require('twit');
var config = require('./config.js');

var Twitter = new twit(config);

var tweetHelloWorld = function() {
    var tweet = {
        status:'System.out.println("Hello World")'
    }
    Twitter.post('statuses/update', tweet, function(err,data,response){
           if(err){
            console.log("Error in Tweeting");
           } else{
               console.log("First Tweet Sent!")
           }
        }
    );
}

tweetHelloWorld();