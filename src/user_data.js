import React from 'react';
import PropTypes from 'prop-types';

const Data = ({ user }) => (
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
);

Data.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    statuses_count: PropTypes.number,
    friends_count: PropTypes.number,
    favourites_count: PropTypes.number,
    followers_count: PropTypes.number,
    screen_name: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default Data;
