# ILMG-Twitter-Bot

Twitter Bot for the ILoveMattGreen Account

* A potential issue is that Tweets that have already been processed will be retweeted again.

* Storing the result all the jobs?

* What is the interval can the job can ran with a search far enough back

## Open Questions

* How to control the retweet search criteria?

    The Twit GH page has an example of how they performed a search

                //
                //  search twitter for all tweets containing the word 'banana' since July 11, 2011
                //
                T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
                console.log(data)
                })

    * How can I specify Hours and Minutes?

        I'm not sure it's wholly possibe.

* How to control the frequency of the job?
    Using the setInterval function, I can run the job every 30 mins;

## Workflow

## Resources

## Tutorials

* [Build a Twitter Bot in 30 mins](https://hackernoon.com/create-a-simple-twitter-bot-with-node-js-5b14eb006c08)

* [FCC - Build Twitter Bot In 30](https://medium.freecodecamp.org/easily-set-up-your-own-twitter-bot-4aeed5e61f7f)

## Libraries

* [Twit - Twitter Library](https://github.com/ttezel/twit)

## APIs

* [Twitter Get - Search/Tweets](https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets)
    * 