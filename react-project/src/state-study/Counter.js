import React, { Component } from 'react';


class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
    this.handleDecrease = this.handleDecrease.bind(this);
  }

  /* 방법 1 : 화살표 함수 */
  handleIncrease = () => {
    const { number } = this.state
    this.setState ({
      number: number + 1
    });
  }

  /* 방법 2: 일반 메소드 형식 (constructor 에 bind 해주어야함.)*/
  handleDecrease () {
    this.setState(
      ({ number }) => ({
        number: number - 1
      })
    )
    /* this.setState({
      number: this.state.number - 1
    }); */
  }

  render () {
    return (
      <div>
        <h1>카운터</h1>
        <div>값 : {this.state.number}</div>
        <button onClick={this.handleIncrease}>증가</button>
        <button onClick={this.handleDecrease}>감소</button>
      </div>
    );
  }
}

export default Counter;
