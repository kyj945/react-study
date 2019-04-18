import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BoardList from 'components/board/BoardList';

import * as modalActions from 'modules/modal';
import * as boardActions from 'modules/board';


class BoardListContainer extends Component {
  handleOpenModify = (id) => {
    const { boards, ModalActions } = this.props;
    const board = boards.find(board => board.get(id) === id);

    ModalActions.show({
      mode: 'modify',
      board: board.toJS()
    })
  }
  handleRemove = () => {
    const { BoardActions, modal } = this.props;
    BoardActions.remove
  }
  render() {
    return (
      <BoardList

      />
    );
  }
}

export default connect(
  (state) => ({
    boards: state.boards
  })
  (dispatch) => ({
    ModalActions: bindActionCreators(modalActions, dispatch);
    BoardActions: bindActionCreators(boardActions, dispatch);
  })
)(BoardListContainer);
