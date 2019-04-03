import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css'

const Counter = ({
  number, color, index, onIncrement, onDecrement, onSetColor
}) => {
  return (
    <div
      className = "Counter"
      onClick={() => onIncrement(index)}
      onContextMenu={
        (e) => {
            e.preventDefault();
            onDecrement(index);
        }
      }
      onDoubleClick={() => onSetColor(index)}
      style={{backgroundColor: color}}>
      {number}
    </div>
  );
}

//props 타입체크
Counter.propTypes = {
  index: PropTypes.number,
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func
}

Counter.defaultProps = {
  index: 0,
  number: 0,
  color: 'blue',
  onIncrement: () => console.warn('onIncrement not defined'),
  onDecrement: () => console.warn('onDecrement not defined'),
  onSetColor: () => console.warn('onSetColor not defined')
}

export default Counter;
