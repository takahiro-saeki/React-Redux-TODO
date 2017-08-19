import { combineReducers } from 'redux';
import todo from './todo';
import filterFlag from './filterFlag';

const reducers = {
  todo,
  filterFlag
}
const reducer = combineReducers(reducers)

export default reducer;
