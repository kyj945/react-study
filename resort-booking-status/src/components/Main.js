import React, { Component } from 'react';
import TabBar from './TabBar'
import BookingInfo from './BookingInfo'
import axios from 'axios';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name:'',
          id: ''
        }
      ]
    };
  }

/*
  componentDidMount () {
    let jsonData = () => {
      axios.get('/api/booking/statuses').then(res => {
        this.setState.data() =
      });
    }
  }

  onClick = () => {

  }
*/

  render() {
    const { data } = this.state;
    this.setState = {
      data: data.concat(
            {
              name: 'h',
              id: '1'
            }
        

      )
    }
    return (
      <div>
        {this.state.data}
        {/* <TabBar/>
        <BookingInfo/> */}
      </div>
    );
  }
}

export default Main;
