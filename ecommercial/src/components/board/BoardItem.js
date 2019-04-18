// <td>
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BoardItem extends Component {
  static propTypes = {
    idx: PropTypes.number,
    board: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      userId: PropTypes.string,
      content: PropTypes.string
    }),
    onModify: PropTypes.func,
    onRemove: PropTypes.func
  }

  render() {
    const {
      idx,
      board: {id, title, userId, content},
      onModify,
      onRemove
    } = this.props;

    return (
      <tr>
        <td>{idx}</td>
        <td>{title}</td>
        <td>{userId}</td>
        <td>{content}</td>
        <td>
          <button onClick={() => onModify(id)}>수정</button>
          <button onClick={() => onRemove(id)}>삭제</button>
        </td>
      </tr>
    );
  }
}

export default BoardItem;
