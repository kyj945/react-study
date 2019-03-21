import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import DateTab from './components/DateTab';
import TabBar from './components/TabBar';
import BookingInfo from './components/BookingInfo';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingStatus: [],
      selectIdx: 0,
      searchDate: [],
    };
  }

  componentDidMount() {
    this.setSearchDate();
    this.getStatusInfo();
  }

  getToday = () => moment().format('YYYYMMDD')

  getStatusInfo = (startDate) => {
    if (startDate === undefined || startDate === null) {
      startDate = this.getToday();
    }

    axios.get('http://localhost:8181/api/booking/statuses', {
      params: {
        date: startDate,
        size: 7,
      },
    })
      .then((response) => {
        this.setState({
          bookingStatus: response.data,
        });
      }); // SUCCESS
  }

  selectResort = (idx) => {
    this.setState({
      selectIdx: idx,
    });
  }

  setSearchDate = (startDate) => {
    const dateList = [];
    if (startDate === undefined || startDate === null) {
      startDate = this.getToday();
    }

    for (let i = 0; i < 7; i += 1) {
      const date = moment(startDate).add(i, 'days').format('YYYYMMDD');
      dateList.push(date);
    }

    this.setState({
      searchDate: dateList,
    });
  }

  changeDateListFormat = () => {
    const { searchDate } = this.state;
    const dateList = [];
    const startDate = searchDate[0];

    for (let i = 0; i < 7; i += 1) {
      const date = moment(startDate).add(i, 'days').format('MM월 DD일');
      dateList.push(date);
    }
    return dateList;
  }

  beforeWeek = () => {
    const today = this.getToday();
    const { setSearchDate } = this;
    const { searchDate } = this.state;

    if (searchDate[0] === today) {
      console.log('오늘보다 이전 날짜는 조회하실 수 없습니다');
    } else {
      const currentStartDate = moment(searchDate[0]).format('YYYYMMDD');
      const beforeDate = moment(currentStartDate).add(-7, 'days').format('YYYYMMDD');
      setSearchDate(beforeDate);
      this.getStatusInfo(beforeDate);
    }
  }

  nextWeek = () => {
    const { setSearchDate } = this;
    const { searchDate } = this.state;
    const currentStartDate = moment(searchDate[0]).format('YYYYMMDD');
    const nextDate = moment(currentStartDate).add(7, 'days').format('YYYYMMDD');

    setSearchDate(nextDate);
    this.getStatusInfo(nextDate);
  }

  render() {
    const {
      selectResort, beforeWeek, nextWeek, changeDateListFormat,
    } = this;
    const { bookingStatus, selectIdx, searchDate } = this.state;
    const resortList = [];
    const roomSectors = [];
    const resortCount = bookingStatus.length;
    if (resortCount !== 0) {
      for (let i = 0; i < resortCount; i += 1) {
        resortList.push({
          idx: i, name: bookingStatus[i].name,
        });
        roomSectors.push({
          idx: i, roomSectors: bookingStatus[i].roomSectors, name: bookingStatus[i].name,
        });
      }

      return (
        <div className="mainContainer">
          <div>
            <DateTab searchDateInfo={searchDate} beforeWeek={beforeWeek} nextWeek={nextWeek} />
            <TabBar resortList={resortList} selectResort={selectResort} />
            <BookingInfo roomSectorsInfo={roomSectors[selectIdx]} searchDateInfo={changeDateListFormat()} />
          </div>
        </div>
      );
    }
    return (
      <div />
    );
  }
}

export default Main;
