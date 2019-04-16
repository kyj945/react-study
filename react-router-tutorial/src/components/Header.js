import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/"> 홈 </Link>
        <Link to="/about/yeojin"> 소개 </Link>
        <Link to="/posts"> 포스트 </Link>
        <Link to="/login"> 로그인 </Link>
      </div>
    )
  }
}
