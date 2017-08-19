import {ADD_TODO, DELETE_TODO, CHECK_TODO, ACTIVE_TODO} from 'constants/actionType';

export const addTodo = todo => ({
  type: ADD_TODO,
  data: todo
})

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
})

export const checkTodo = (id, isCheck) => ({
  type: CHECK_TODO,
  id,
  isCheck
})

export const activeTodo = () => ({
  type: ACTIVE_TODO
})
