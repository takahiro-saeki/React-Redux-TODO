import { combineReducers } from 'redux';
import todo from './main';

const reducers = {
  todo
}
const reducer = combineReducers(reducers)

export default reducer;
