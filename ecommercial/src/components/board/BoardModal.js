import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import Modal from '../common/Modal';

import PropTypes from 'prop-types';
const Form = styled.div`
    /* 레이아웃 */
    padding: 1rem;

    /* 색상 */
    background: ${oc.gray[0]};
`;

const ButtonsWrapper = styled.div`
    /* 레이아웃 */
    display: flex;
`;

const Button = styled.div`
    /* 레이아웃 */
    padding-top: 1rem;
    padding-bottom: 1rem;
    flex: 1;
    display: inline-block;

    /* 기타 */
    cursor: pointer;
    text-align: center;
    font-weight: 500;
    font-size: 1.2rem;
    transition: all .3s;

    /* 색상 */
    color: white;
    background: ${props => oc[props.color][7]};

    /* 마우스가 위에 있을 때 */
    &:hover {
        background: ${props => oc[props.color][6]};
    }

    /* 클릭 될 때 */
    &:active {
        background: ${props => oc[props.color][8]};
    }
`;

Button.propType = {
    color: PropTypes.string
};

const RemoveButton = styled.div`
    /* 레이아웃 */
    position: absolute;
    right: 1rem;
    top: 1rem;

    /* 색상 */
    color: ${oc.gray[6]};

    /* 기타 */
    cursor: pointer;
    font-size: 2rem;

    /* 마우스 커서 위에 있을 때 */
    &:hover {
        color: ${oc.red[6]};
    }
    /* 마우스 커서 클릭 시 */
    &:active {
        color: ${oc.red[7]}
    }

    ${props => !props.visible && 'display: none;'}
`

RemoveButton.propTypes = {
    visible: PropTypes.bool
};

const Input = styled.input`
    /* 레이아웃 */
    width: 100%;
    padding: 0.5rem;

    /* 색상 */
    border: 1px solid ${oc.gray[2]};

    /* 기타 */
    font-size: 1.5rem;
    line-height: 2rem;
    transition: all .25s;

    /* 입력중일때 */
    &:focus {
        outline: none;
        border: 1px solid ${oc.pink[3]};
        color: ${oc.pink[6]};
    }

    /* 컴포넌트 사이 간격 */
    & + & {
        margin-top: 1rem;
    }
`;

class BoardModal extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    mode: PropTypes.oneOf(['create', 'modify']),
    title: PropTypes.string,
    content: PropTypes.string,
    onHide: PropTypes.func,
    onChange: PropTypes.func,
    onCreate: PropTypes.func,
    onModify: PropTypes.func
  }

  handleChange = (e) => {
    const { onChange } = this.props;
    onChange({
      name: e.target.name,
      value: e.target.value
    });
  }

    render() {
      const { handleChange } = this;
      const {
        visible,
        mode,
        title,
        content,
        onHide,
        onCreate,
        onModify
      } = this.props;

      return(
        <Modal visible={visible} onHide={onHide}>
          <Form>
            <Input
              name="title"
              placeholder="제목"
              value={title}
              onChange={handleChange}
              />
              <Input
                name="content"
                placeholder="내용"
                value={content}
                onChange={handleChange}
              />
          </Form>
          <ButtonsWrapper>
            {mode === 'create' ?
              <Button
                color="teal"
                onClick={onCreate}>
                추가
              </Button>
              :
              <Button
                color="teal"
                onClick={onModify}>
                수정
              </Button>
            }

            <Button
              color="gray"
              onClick={onHide}>
              취소
            </Button>
          </ButtonsWrapper>
        </Modal>
      );
    }
}

export default BoardModal;
