import React, { Component } from 'react';

class TabBar extends Component {
  render() {
    return (
      <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#tag1">비발디파크</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#tag2">양양 쏠비치</a>
          </li>
      </ul>
    );
  }
}

export default TabBar;
