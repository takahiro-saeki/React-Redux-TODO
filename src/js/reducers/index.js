import { combineReducers } from 'redux';
import todo from './todo';

const reducers = {
  todo
}
const reducer = combineReducers(reducers)

export default reducer;
