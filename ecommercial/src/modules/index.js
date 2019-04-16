import { combineReducers } from 'redux';
import board from './board';
import modal from './modal';

export default combineReducers({
  board,
  modal
});
