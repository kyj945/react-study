// <td>
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BoardItem extends Component {
  static proTypes = {
    board: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      userId: PropTypes.string,
      content: PropTypes.string,
    }),
    onOpenModify: PropTypes.func
  }

  render() {
    const {
      board: { id, title, userId, content},
      onOpenModify
    } = this.props;

    return (
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{userId}</td>
        <td>{content}</td>
        <td><button onClick={() => onOpenModify(id)}>수정/삭제</button></td>
      </tr>
    );
  }
}

export default BoardItem;
