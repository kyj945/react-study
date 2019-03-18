import React, { Component } from 'react';
import './TodoForm.css';

const TodoForm = ({value, onChange, onCreate, onKeyPress}) => {
  return (
    <div className="form">
      <input
        value={value}
        onChange={onChange}
        onCreate={onCreate}
        onKeyPress={onKeyPress}
      />
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
    </div>
  );
}

export default TodoForm;
