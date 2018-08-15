import React from 'react';

class Utilities extends React.Component {
  static urlify(tweet, type) {
    const { media } = tweet.entities;
    if (Array.isArray(media) || media !== undefined) {
      if (type === 'url') {
        return tweet.entities.media[0].url;
      }
      if (type === 'text') {
        const tweettext = tweet.full_text.replace(tweet.entities.media[0].url, '');
        return tweettext;
      }
    }
    const { urls } = tweet.entities;
    if (Array.isArray(urls) && urls[0] !== undefined) {
      if (type === 'url') {
        return tweet.entities.urls[0].url;
      }
      if (type === 'text') {
        const tweettext = tweet.full_text.replace(tweet.entities.urls[0].url, '');
        return tweettext;
      }
    }
    return tweet.full_text;
  }

  static getMedia(tweet) {
    const { media } = tweet.entities;
    if (Array.isArray(media) && media !== undefined) {
      return tweet.entities.media[0].media_url_https;
    }
    return 'false';
  }
}

export default Utilities;
