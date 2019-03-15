import React from 'react';

/* 함수형 컴포넌트 */
const MyName = ({ name }) => {
  return (
    <div>
      안녕하세요. 이름은 <b>{name}</b>입니다.
    </div>
  );
};

/* 클래스형 컴포넌트
import React, { Component } from 'react';

class MyName extends Component {
  <!-- static defaultProps = {
    name: '기본이름'
  } -->
  render () {
    return (
      <div>
        안녕하세요. 이름은 <b>{this.props.name}</b>입니다.
      </div>
    );
  }
}

 MyName.defaultProps = {
  name: '기본이름'
} */

export default MyName;
