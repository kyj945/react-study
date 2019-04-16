//redux-actions을 사용하여 액션 자동화
import {createAction, handleActions} from 'redux-actions';
import {Map, List} from 'immutable';

const CREATE = 'counter/CREATE';
const REMOVE = 'counter/REMOVE';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const SET_COLOR = 'counter/SET_COLOR';

//파라미터로 전달받는 값 : 액션의 payload값으로 설정
export const create = createAction(CREATE);
export const remove = createAction(REMOVE);
//ex) increment(3) 실행 시 {type: 'INCREMENT', payload: 5}
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
//ex) setColor({index:5, color:#fff})
export const setColor = createAction(SET_COLOR);

const initialState = Map({
  counters: List([
    Map({
      number: 0,
      color: 'black'
    })
  ])
})

//handleActions(reducerMap, defaultState)
export default handleActions({
  [CREATE]: (state, action) => {
    const counters = state.get('counters');

    return state.set('counters', counters.push(
        Map({
          color: action.payload,
          number: 0
        })
    ))
  },

  [REMOVE]: (state, action) => {
    const counters = state.get('counters');

    return state.set('counters', counters.pop())
  },

  [INCREMENT]: (state, action) => {
    const counters = state.get('counters');

    return state.set('counters', counters.update(
      action.payload,
      (counter) => counter.set('number', counter.get('number') + 1)
    ))
  },

  [DECREMENT]: (state, action) => {
    const counters = state.get('counters');
    return state.set('counters', counters.update(
      action.payload,
      (counter) => counter.set('number', counter.get('number') - 1)
    ))
  },

  [SET_COLOR]: (state, action) => {
    const counters = state.get('counters');
    return state.set('counters', counters.update(
      action.payload.index,
      (counter) => counter.set('color', action.payload.color)
    ))
  },
}, initialState);
