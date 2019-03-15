import React, { Component } from 'react';
import UserList from './UserList';

class Main extends Component {
  id = 3;

  constructor(props){
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          username: 'kim'
        },
        {
          id: 2,
          username: 'lee'
        }
      ]
    };
  }

  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      input: value
    });
  }

  onButtonClick = (e) => {
    this.setState(({ users, input }) => ({
      input: '',
      users: users.concat({
        id: this.id ++,
        userName: input
      })
    }))
  }

  render() {
    const { onChange, onButtonClick } = this;
    const { input, users } = this.state;
    return (
      <div>
        <div>
          <input onChange={onChange} value={input}/>
          <button onClick={onButtonClick}>추가</button>
        </div>
        <h1>사용자 목록</h1>
        <div>
          <UserList users={users}/>
        </div>
      </div>
    );
  }
}

export default Main;
