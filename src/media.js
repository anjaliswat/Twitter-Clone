import React from 'react';
import PropTypes from 'prop-types';
import Utilities from './utilities';

class Media extends React.Component {
  render() {
    const { tweet } = this.props;
    const { media } = tweet.entities;
    const { retweeted_status } = tweet;
    const retweetedBy = 'Retweeted By ';
    if (retweeted_status) {
      return (
        <div className="retweet">
          <div>
            <p>
              {retweetedBy}
              {tweet.user.name}
              @
              {tweet.user.screen_name}
            </p>
          </div>
          <div className="retweet_user_credentials">
            <p>
              {tweet.entities.user_mentions[0].name}
            </p>
            <p>
              @
              {tweet.entities.user_mentions[0].screen_name}
            </p>
          </div>
          <div className="retweet_content">
            {retweeted_status.full_text}
            <div className="media">
              <div className="attachments">
                <a href={urls[0].url}>
                  <img alt="" src={urls[0].display_url} className="media" />
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (media) {
      return (
        <div>
          <div className="tweet_user_credentials">
            <p>
              {tweet.user.name}
            </p>
            <p>
              @
              {tweet.user.screen_name}
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
        </div>
      );
    }
    return (
      <div>
        <div className="tweet_user_credentials">
          <p>
            {tweet.user.name}
          </p>
          <p>
            @
            {tweet.user.screen_name}
          </p>
        </div>
        <div className="content">
          {tweet.full_text}
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
