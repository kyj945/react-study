import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render () {
    return (
      <div>
        <hr/>
        <ul>
          <li><Link to="/body1">Body1</Link></li>
          <li><Link to="/body2">Body2</Link></li>
          <li><Link to="/body3">Body3</Link></li>
        </ul>
        <hr/>
      </div>
    );
  }
}

export default Menu;
