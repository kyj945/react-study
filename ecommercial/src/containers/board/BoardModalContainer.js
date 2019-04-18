import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BoardModal from 'components/board/BoardModal';
import Dimmed from 'components/common/Dimmed';

import * as modalActions from 'modules/modal';
import * as boardActions from 'modules/board';

class BoardModalContainer extends Component {
  handleHide = () => {
    const { ModalActions } = this.props;
    ModalActions.hide();
  }

  handleChange = () => {
   const { ModalActions } = this.props;

   ModalActions.change({
     name,
     value
   });
  }

  handleCreate = () => {
    const { BoardActions, modal } = this.props;
    const { title, content } = modal.get('board').toJS();

    BoardActions.create({
      title,
      content
    });
    this.handleHide();
  }

  handleModify = () => {
    const { BoardActions, modal } = this.props;
    const { title, content, id } = modal.get('board').toJS();

    BoardActions.modify({
      id,
      board: {
        title,
        content
      }
    });

    this.handleHide();
  }

  render() {
    const { handleHide, handleChange, handleCreate, handleModify } = this;
    const { modal } = this.props;
    const { visible, mode, board } = modal.toJS();

    return (
      <div>
        <BoardModalContainer
          visible = {visible}
          mode = {mode}
          title = {board.title}
          content = {board.content}
          onHide = {handleHide}
          onChange = {handleChange}
          onCreate = {handleCreate}
          onModify = {handleModify}
          />
        <Dimmed visible={visible}/>
      </div>
    )
  }

}

export default connect(
  (state) => ({
    modal: state.modal
  }),
  // bindActionCreators는 액션함수를 모두 자동으로 설정해줌.
  // modal,board module의 액션함수를 불러와 이를 dispatch하는 함수를 만들어 props로 ModalActions/BoardActions 객체안에 넣어 전달
  (dispatch) => ({
    BoardActions: bindActionCreators(boardActions, dispatch),
    ModalActions: bindActionCreators(modalActions, dispatch)
  })
)(BoardModalContainer);
