import {ALL, ACTIVE, COMPLETED} from 'constants/flagType';
const defaultParam = {
  flag: ALL
}

const filterFlag = (state = defaultParam, action) => {
  switch(action.type) {
    case ALL: {
      const merge = Object.assign({}, state, {flag: ALL})
      return merge;
    }
    case ACTIVE: {
      const merge = Object.assign({}, state, {flag: ACTIVE})
      return merge;
    }
    case COMPLETED: {
      const merge = Object.assign({}, state, {flag: COMPLETED})
      return merge;
    }
    default: return state;
  }
}

export default filterFlag;
