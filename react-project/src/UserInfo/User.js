import React, { Component } from 'react';

class User extends Component {
  render () {
    const { user: { username } } = this.props;
    console.log('%s 렌더링 중', username);

    return (
      <div>
        {username}
      </div>
    );
  }
}

export default User;
