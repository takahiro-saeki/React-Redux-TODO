import {ADD_TODO} from 'constants/actionType';

export const addTodo = todo => ({
  type: ADD_TODO,
  data: todo
})
