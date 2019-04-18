import React, { Component } from 'react';
import Dimmed from 'components/common/Dimmed';
import BoardList from './BoardList';
import BoardModal from './BoardModal';
import { Map, List } from 'immutable';

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

  onCreate = () => {
    this.modalHandler.show(
      'create'
    )
  }


  onModify = (id) => {
    const { boards } = this.state;
    //const index = boards.findIndex(board => board.id === id);
    const index = boards.findIndex(board => board.id === id);
    const item = boards[index];

    this.modalHandler.show(
      'modify',
      {
        ...item,
        index
      }
    );
  }

  modalHandler = {
    show: (mode, payload) => {
      this.setState({
        modal: {
          visible: true,
          mode,
          ...payload
        }
      })
    },
    hide: () => {
      this.setState({
        modal: {
          ...this.state.modal,
          visible: false
        }
      })
    },
    change: ({name, value}) => {
      this.setState({
        modal: {
          ...this.state.modal,
          [name] : value
        }
      })
    },
    action: {
      create: () => {
        const id = boards.length + 1
        const {
          modal: { title, content },
          boards
        } = this.state;

        const board = { id, title, content } ;

        this.setState({
          boards: [...boards, board]
        })
      },
      modify: (id) => {
        const {
          modal: { title, content, index},
          boards
        } = this.state;

        const item = boards[index];

        this.setState({
          boards: [
            ...boards.slice(0, index),
            {
              ...item,
              title,
              content
            },
            ...boards.slice(index + 1, boards.length)
          ]
        });
        this.modalHandler.hide();
      },
      remove: (id) => {
        const {
          modal: { index },
          boards
        } = this.state;

        this.setState({
          boards: [
            ...boards.slice(0, index),
            ...boards.slice(index + 1, boards.length)
          ]
        });
        this.modalHandler.hide();
      }
    }
  }

  render() {
    const { onCreate, onModify, onRemove, modalHandler } = this;
    const { modal, boards } = this.state;

    return(
      <div className="container">
        <button onClick={() => onCreate()}>add board</button>
        <BoardList
          boards={boards}
          onModify={onModify}
          onRemove={modalHandler.action['remove']}
        />

        <BoardModal
          {...modal}
          onHide={modalHandler.hide}
          onAction={modalHandler.action[modal.mode]}
        />
        <Dimmed visible={modal.visible}/>
      </div>
    );
  }
}
export default Board;
