let Twitter = require('twitter');
const express = require('express');
const request = require('request');
const auth = require('./config.json');

let consumer_key = auth.apiKey;
let consumer_secret = auth.apiSecret;
let access_token = auth.accessToken;
let access_token_secret = auth.accessTokenSecret;

const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

const client = new Twitter({
  consumer_key: consumer_key,
  consumer_secret: consumer_secret,
  access_token_key: access_token,
  access_token_secret: access_token_secret
});

let params = {screen_name: 'aerohitk', tweet_mode:'extended', count: 7}
app.get('/tweets', (req,res) => {
  client.get('https://api.twitter.com/1.1/statuses/user_timeline.json', params, function(error, tweets, response) {
    if(error) throw error;
    res.send(tweets);
  })
})

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
