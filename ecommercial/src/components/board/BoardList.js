import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BoardItem from './BoardItem';

class BoardList extends Component {
  static propTypes = {
    boards: PropTypes.arrayOf(PropTypes.object),
    onOpenModify: PropTypes.func
  }

  handleCreate = () => {
    // modal open
  }

  render() {
    const { handleCreate } = this;
    const { boards, onOpenModify } = this.props;
    const boardList = boards.map(board => (
      <BoardItem
        key={board.id}
        board={board}
        onOpenModify={onOpenModify}
      />
    )
  );

  return (
    <div className="container">
     <button onClick={() => handleCreate}>add board</button>
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
    </div>
  );
  }
}

export default BoardList;
