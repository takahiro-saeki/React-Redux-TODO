import { INIT_FETCH } from '../constants/actionType';

const defaultParam = {
  data: []
}

const todoData = (state = defaultParam, action) => {
  switch (action.type) {
    case INIT_FETCH: {
      const merge = Object.assign({}, state, action.data)
      return merge;
    }
    default:
      return state
  }
}

export default todoData;
