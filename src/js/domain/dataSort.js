import {ALL, ACTIVE, COMPLETED} from 'constants/flagType';

const dataSort = (data = [], flag) => {
  const box = [];
  data.map(item => {
    switch(flag) {
      case ALL: return box.push(item)
      case ACTIVE: return item.isCheck ? false : box.push(item)
      case COMPLETED: return item.isCheck ? box.push(item) : false
    }
  })
  return box;
}

export default dataSort;
