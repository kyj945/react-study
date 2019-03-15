import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo'

class PhoneInfoList extends Component {
  static defaultProps = {
    list: [],
    onUpdate: () => console.warn('onUpdate not defined'),
    onRemove: () => console.warn('onRemove not defined')
  }

  render() {
    const { data, onRemove, onUpdate } = this.props;
    const list = data.map (
      (info, index) =>
      <PhoneInfo
        key={index}
        info={info}
        onRemove={onRemove}
        onUpdate={onUpdate}
        ></PhoneInfo>
    );

    return (
      <div>
        {list}
      </div>
    );
  }
}

export default PhoneInfoList;
