import {ADD_TODO, DELETE_TODO} from 'constants/actionType';

export const addTodo = todo => ({
  type: ADD_TODO,
  data: todo
})

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
})
