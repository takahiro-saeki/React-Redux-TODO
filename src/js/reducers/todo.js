import { ADD_TODO } from 'constants/actionType';

const defaultParam = {
  data: []
}

const todo = (state = defaultParam, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const dataMerge = [...state.data, action.data]
      const optimize = dataMerge.map((item, i) => {
        item.id = i + 1
        return item
      })
      const merge = Object.assign({}, state, {data: optimize})
      return merge;
    }
    default:
      return state
  }
}

export default todo;
