// Dependencies =========================
var twit = require('twit');
var config = require('./config.js');

var Twitter = new twit(config);

/**
 * The retweetILoveMattGreen method should retweet
 *
 * I Love You Too @Username
 *
 * Search Criteria
 *
 */
var retweetILoveMattGreen = function () {
    var query = {

    }
}

var tweetHelloWorld = function () {
    var tweet = {
        status: 'System.out.println("Hello World")'
    }
    Twitter.post('statuses/update', tweet, function (err, data, response) {
        if (err) {
            console.log("Error in Tweeting");
        } else {
            console.log("First Tweet Sent!")
        }
    }
    );
}

tweetHelloWorld();