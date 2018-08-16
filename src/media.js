import React from 'react';
import PropTypes from 'prop-types';
import Utilities from './utilities';

class Media extends React.Component {
  render() {
    const { tweet } = this.props;
    const { media } = tweet.entities;
    if (media) {
      return (
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
      );
    }
    return (
      <div className="content">
        {tweet.full_text}
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
