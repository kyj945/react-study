import React, { Component } from 'react';

const Problematic = () => {
  throw (new Error('버그발생'));
  return (
    <div>
    </div>
  );
}

class Counter2 extends Component {
  constructor (props) {
     super(props);
     this.state = {
       number: 0,
       error: false
     }
     console.log('constructor')
   }

   componentWillMount() {
     console.log('componentWillMount (deprecated)')
   }

   componentDidMount() {
     console.log('componentDidMount')
   }

   shouldComponentUpdate(nextProps, nextState) {
     console.log('shouldComponentUpdate')
     /* number가 5의 배수인 경우 rerender 되지 않음 */
     if(nextState.number % 5 === 0){
       return false;
     }
     return true;
   }

   componentWillUpdate(nextProps, nextState) {
     console.log('componentWillUpdate')
   }

   componentDidUpdate(preProps, preState){
     console.log('componentDidUpdate')
   }

   handleIncrease = () => {
     const { number } = this.state;
     this.setState({
       number: number + 1
     })
   }

   handleDecrease = () => {
     this.setState({
       number: this.state.number - 1
     })
   }

   componentDidCatch(error, info) {
     this.setState({
       error: true
     });
   }

   render() {
     if(this.state.error)
       return <div>에러발생</div>
     return (
       <div>
         <h1>카운터</h1>
         <div>값 : {this.state.number} </div>
         {this.state.number === 4 && <Problematic/>}
         <button onClick={this.handleIncrease}>증가</button>
         <button onClick={this.handleDecrease}>감소</button>
       </div>
     );
   }
}

export default Counter2;
