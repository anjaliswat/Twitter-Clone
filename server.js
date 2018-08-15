let Twitter = require('twitter');
const express = require('express');
const request = require('request');
const auth = require('./config.json');

let consumer_key = auth.apiKey;
let consumer_secret = auth.apiSecret;
let access_token = auth.accessToken;
let access_token_secret = auth.accessTokenSecret;

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));

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

app.get('/profile', (req,res) => {
  screen_name = req.query.screen_name;
  params = {screen_name: screen_name, tweet_mode:'extended'};
  client.get('https://api.twitter.com/1.1/statuses/user_timeline.json', params, function(error, tweets, response) {
    if(error) throw error;
    res.send(tweets);
  })
})

app.get('/home', (req,res) => {
  client.get('https://api.twitter.com/1.1/statuses/home_timeline.json', function(error, tweets, response) {
    if(error) throw error;
    res.send(tweets);
  })
})

app.listen(PORT, () => {
  console.log('Listening on port 3000');
});
