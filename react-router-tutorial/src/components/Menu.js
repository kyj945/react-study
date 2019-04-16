import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/mypage">MyPage</Link></li>
        <li><Link to="/setting">Setting</Link></li>
        <li><Link to="/posts">Post</Link></li>
      </ul>
      <hr/>
    </div>
  );
}

export default Menu;
