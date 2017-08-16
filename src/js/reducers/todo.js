import { ADD_TODO } from 'constants/actionType';

const defaultParam = {
  data: []
}

const todo = (state = defaultParam, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const merge = Object.assign({}, state, action.data)
      return merge;
    }
    default:
      return state
  }
}

export default todo;
