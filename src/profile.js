import React from 'react';
import Media from './media';
import Data from './user_data';
import './style.css';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      tweets: [],
      clicked: false,
      username: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  setData(username) {
    fetch(`http://localhost:3000/profile?screen_name=${username}`)
      .then(response => response.json())
      .then((data) => {
        this.setState({ tweets: data });
      });
  }

  handleClick() {
    const { username } = this.state;
    if (username) {
      this.setState({ clicked: true });
      this.setData(username);
    }
  }

  handleInput(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    const { tweets, clicked, username } = this.state;
    let user = '';

    tweets.map(tweet => (
      { user } = tweet
    ));

    if (!clicked) {
      return (
        <div>
          <input type="text" value={username} onChange={this.handleInput} className="textbox" placeholder="Enter your Twitter username" />
          <button type="button" onClick={this.handleClick} className="button">
            Enter
          </button>
        </div>
      );
    }

    return (
      <div className="twitter_page">
        <Data user={user} />
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
              <Media tweet={tweet} />
            </div>
          ))
        }
      </div>
    );
  }
}

export default Profile;
