import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css'

const Counter = ({
  number, color, onIncrement, onDecrement, onSetColor
}) => {
  return (
    <div
      className = "Counter"
      onClick={onIncrement}
      onDoubleClick={onSetColor}
      onContextMenu={
        (e) => {
          e.preventDefault();
          onDecrement();
        }
      }
    style={{backgroundColor: color}}>
    {number}
    </div>
  );
}

//props 타입체크
Counter.propTypes = {
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func
}

Counter.defaultProps = {
  number: 0,
  color: 'blue',
  onIncrement: () => console.warn('onIncrement not defined'),
  onDecrement: () => console.warn('onDecrement not defined'),
  onSetColor: () => console.warn('onSelector not defined')
}

export default Counter;
