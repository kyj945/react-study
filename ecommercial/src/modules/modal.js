import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const SHOW = 'modal/SHOW';
const HIDE = 'modal/HIDE';
const CHANGE = 'modal/CHANGE';

export const show = createAction(SHOW);
export const hide = createAction(HIDE);
export const change = createAction(CHANGE);

const initialState = Map({
  visible: false,
  mode: null,
  board: Map({
    id: null,
    title: '',
    userId: '',
    content: ''
  })
});

export default handleActions({
  [SHOW]: (state, action) => {
    const { mode, board } = action.payload;
    return state.set('visible', true)
                .set('mode', mode)
                .set('board', Map(board))
  },
  [HIDE]: (state, action) => state.set('visible', false),
  [CHANGE]: (state, action) => {
    const { name, value } = action.payload;
    return state.setIn(['board', name], value);
  }
}, initialState);
