import React from 'react';
import './style.css';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      tweets: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/tweets')
      .then(response => response.json())
      .then((data) => {
        this.setState({ tweets: data });
      });
  }

  getMedia(tweet) {
    if (tweet.retweeted_status) {
      const { media } = tweet.retweeted_status.entities;
      if (Array.isArray(media) || media !== undefined) {
        return tweet.retweeted_status.entities.media[0].media_url_https;
      }
    }
    return false;
  }

  urlify(tweet, remove) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const urlPresent = urlRegex.test(tweet);
    if (urlPresent == true) {
      if(remove == false) {
        return tweet.match(urlRegex);
      }
      if(remove == true) {
        return tweet.replace(tweet.match(urlRegex), "")
      }
    }
    return tweet;
  }

  render() {
    const { tweets } = this.state;
    let user = '';

    tweets.map(tweet => (
      { user } = tweet
    ));

    return (
      <div className="user_profile">
        <div className="user_data">
          <div className="images">
            <img alt="header" src={user.profile_banner_url} className="header" />
            <img alt="profile" src={user.profile_image_url} className="profile-pic" />
          </div>
          <table className="stats">
            <thead>
              <tr>
                <th>
                Tweets
                </th>

                <th>
                  Following
                </th>

                <th>
                  Followers
                </th>

                <th>
                  Likes
                </th>
              </tr>
            </thead>

            <tbody>
              <tr key={user.id}>
                <td>
                  {user.statuses_count}
                </td>

                <td>
                  {user.followers_count}
                </td>

                <td>
                  {user.friends_count}
                </td>

                <td>
                  {user.favourites_count}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="user_credentials">
            <p className="name">
              {user.name}
            </p>
            <p className="username">
              @
              {user.screen_name}
            </p>
          </div>
        </div>

        {
          tweets.map(tweet => (
            <div key={tweet.id_str} className="tweet">
              <img alt="profile" src={user.profile_image_url} className="user_icon" />
              <div className="tweet_user_credentials">
                <p>
                  {tweet.user.name}
                </p>
                <p>
                  @
                  {tweet.user.screen_name}
                </p>
              </div>
              <p className="content">
                {this.urlify(tweet.full_text, true)}
              </p>
              <div className="attachments">
                <a href={this.urlify(tweet.full_text, false)}>
                  <img alt="" src={this.getMedia(tweet)} className="media"/>
                </a>
              </div>
            </div>
          ))
        }

      </div>
    );
  }
}

export default Profile;
