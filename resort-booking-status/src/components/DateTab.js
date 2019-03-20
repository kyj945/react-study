import React, { Component } from 'react';

class DateTab extends Component {
  static defaultProps = {
    searchDateInfo: []
  }

  beforeWeek = () => {
    this.props.beforeWeek();
  }

  nextWeek = () => {
    this.props.nextWeek();
  }

  render() {
    const { searchDateInfo } = this.props;

    return (
      <div className="col-lg-12 row d-flex justify-content-center mt-4 dateSection" >
        <button type="button" className="bgTransparent" onClick={this.beforeWeek} >
          <div className="arrowLeft"/>
        </button>
        <div>{searchDateInfo[0]} ~ {searchDateInfo[6]}</div>
        <button type="button" className="bgTransparent" onClick={this.nextWeek} >
          <div className="arrowRight"/>
        </button>
      </div>
    );
  }
}

export default DateTab;
