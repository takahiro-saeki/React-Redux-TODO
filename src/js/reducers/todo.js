import { ADD_TODO, DELETE_TODO, CHECK_TODO, ACTIVE_TODO } from 'constants/actionType';
import {compact} from 'lodash/array';

const defaultParam = {
  data: []
}

const todo = (state = defaultParam, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const dataMerge = [...state.data, action.data]
      const optimize = dataMerge.map((item, i) => {
        item.id = i + 1
        if(item.isCheck !== true) {
          item.isCheck = false
        }
        return item
      })
      const merge = Object.assign({}, state, {data: optimize})
      return merge;
    }

    case DELETE_TODO: {
      const organize = state.data.map(item => {
        if(action.id !== item.id) {
          return item;
        }
      })
      const optimize = compact(organize).map((item, i) => {
        item.id = i + 1
        return item;
      })
      const merge = Object.assign({}, state, {data: optimize})
      return merge;
    }

    case CHECK_TODO: {
      const addCheck = state.data.map(item => {
        if(action.id === item.id) {
          item.isCheck = action.isCheck
          return item;
        } else {
          return item;
        }
      })

      const merge = Object.assign({}, state, {data: addCheck})
      return merge;
    }

    case ACTIVE_TODO: {
      const isActive = state.data.map(item => {
        if(item.isCheck === true) {
          return item
        }
      })
      const merge = Object.assign({}, state, {data: compact(isActive)})
      return merge;
    }
    default:
      return state
  }
}

export default todo;
