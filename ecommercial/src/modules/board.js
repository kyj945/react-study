import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const CREATE = 'board/CREATE';
const MODIFY = 'board/MODIFY';
const REMOVE = 'board/REMOVE';

export const create = createAction(CREATE);
export const modify = createAction(MODIFY);
export const remove = createAction(REMOVE);

const initialState = List([
  Map({
    "id": 1,
    "title": "title1",
    "userId": 1,
    "content": "content1"
  }),
  Map({
    "id": 2,
    "title": "title2",
    "userId": 2,
    "content": "content2"
  })
]);

export default handleActions({
  [CREATE]: (state, action) => {
    return state.push(Map(action.payload));
  },
  [MODIFY]: (state, action) => {
    const index = state.findIndex(board => board.get('id') === action.payload.id);
    return state.mergeIn([index], action.payload.board);
  },
  [REMOVE]: (state, action) => {
    const index = state.findIndex(board => board.get('id') === action.payload.id);
    return state.delete(index);
  }
}, initialState);
