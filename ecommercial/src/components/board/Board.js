import React, { Component } from 'react';
// import Dimmed from '../common/Dimmed';
import BoardList from './BoardList';

class Board extends Component {

  state = {
    modal: {
      visible: false,
      mode: null // create, modify
    },
    boards: [
      {
        "id": 1,
        "userId": "lee",
        "title": "title01",
        "content": "content01"
      },
      {
        "id": 2,
        "userId": "kim",
        "title": "title02",
        "content": "content02"
      }
    ]
  }

  //modal handler 추가


  onOpenModify = (id) => {
    const { boards } = this.state;
    const index = boards.findIndex(board => board.get(id) === id);
    const item = boards[index];

    //modal 영역
  }

  render() {
    const { onOpenModify } = this;
    const { modal, boards } = this.state;

    return(
      <BoardList
        boards={boards}
        onOpenModify={onOpenModify}
      />
    );
  }
}
export default Board;
