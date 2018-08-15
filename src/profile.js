import React from 'react';
import Media from './media';
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
        console.log(data);
      });
  }

  handleClick() {
    this.setState({ clicked: true });
    const { username } = this.state;
    this.setData(username);
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
          <input type="text" value={username} onChange={this.handleInput} />
          <button type="button" onClick={this.handleClick}>
            Enter
          </button>
        </div>
      );
    }

    return (
      <div className="user_profile">
        <div className="user_data">
          <div className="images">
            <img alt="icon" src="http://mediad.publicbroadcasting.net/p/wjct/files/styles/medium/public/201407/v65oai7fxn47qv9nectx.png" className="twitter_icon" />
            <img alt="header" src={user.profile_banner_url} className="header" />
            <img alt="profile" src={user.profile_image_url} className="profile_pic" />
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
                  {user.friends_count}
                </td>

                <td>
                  {user.followers_count}
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
              <Media tweet={tweet} />
            </div>
          ))
        }

      </div>
    );
  }
}

export default Profile;
