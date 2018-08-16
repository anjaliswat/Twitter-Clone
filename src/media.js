import React from 'react';
import PropTypes from 'prop-types';
import Utilities from './utilities';

class Media extends React.Component {
  render() {
    const { tweet } = this.props;
    const { media } = tweet.entities;
    const { retweeted_status } = tweet;
    const retweetedBy = 'Retweeted By ';
    console.log(tweet);
    if (retweeted_status) {
      const { name } = tweet.entities.user_mentions[0];
      const { screen_name } = tweet.entities.user_mentions[0];
      return (
        <div className="retweet">
          <div>
            <p>
              {retweetedBy}
              @
              {tweet.user.screen_name}
            </p>
          </div>
          <div className="retweet_user_credentials">
            <p>
              <a href={`https://twitter.com/${screen_name}`}>
                {name}
              </a>
            </p>
            <p>
              <a href={`https://twitter.com/${screen_name}`}>
                @
                {screen_name}
              </a>
            </p>
          </div>
          <div className="retweet_content">
            {retweeted_status.full_text}
          </div>
          <div className="icons">
            <i className="fas fa-retweet" />
            {tweet.retweet_count}
            <i className="far fa-heart" />
            {tweet.favorite_count}
          </div>
        </div>
      );
    }

    const { name } = tweet.user;
    const { screen_name } = tweet.user;

    if (media) {
      return (
        <div>
          <div className="tweet_user_credentials">
            <p>
              <a href={`https://twitter.com/${screen_name}`}>
                {name}
              </a>
            </p>
            <p>
              <a href={`https://twitter.com/${screen_name}`}>
                @
                {screen_name}
              </a>
            </p>
          </div>
          <div className="media">
            <p className="content">
              {Utilities.urlify(tweet, 'text')}
            </p>
            <div className="attachments">
              <a href={Utilities.urlify(tweet, 'url')}>
                <img alt="" src={Utilities.getMedia(tweet)} className="media" />
              </a>
            </div>
          </div>
          <div className="icons_media">
            <i className="fas fa-retweet" />
            {tweet.retweet_count}
            <i className="far fa-heart" />
            {tweet.favorite_count}
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="tweet_user_credentials">
          <p>
            <a href={`https://twitter.com/${screen_name}`}>
              {name}
            </a>
          </p>
          <p>
            <a href={`https://twitter.com/${screen_name}`}>
              @
              {screen_name}
            </a>
          </p>
        </div>
        <div className="content">
          {tweet.full_text}
        </div>
        <div className="icons">
          <i className="fas fa-retweet" />
          {tweet.retweet_count}
          <i className="far fa-heart" />
          {tweet.favorite_count}
        </div>
      </div>
    );
  }
}

Media.propTypes = {
  tweet: PropTypes.shape({
    full_text: PropTypes.string,
  }).isRequired,
};

export default Media;
