import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BoardItem from './BoardItem';

class BoardList extends Component {
  static propTypes = {
    boards: PropTypes.arrayOf(PropTypes.object),
    onModify: PropTypes.func,
    onRemove: PropTypes.func
  }

  render() {
    const { handleCreate } = this;
    const { boards, onModify, onRemove } = this.props;
    const boardList = boards.map((board, i) => (
      <BoardItem
        idx={i + 1}
        key={board.id}
        board={board}
        onModify={onModify}
        onRemove={onRemove}
      />
    )
  );

  return (
      <table class="table">
        <thead>
          <tr>
            <th>Index</th>
            <th>제목</th>
            <th>작성자</th>
            <th>내용</th>
            <th>수정/삭제</th>
          </tr>
        </thead>
        <tbody>
          {boardList}
        </tbody>
      </table>
  );
  }
}

export default BoardList;
