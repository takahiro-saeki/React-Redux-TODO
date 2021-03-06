import React from 'react';
import uuid from 'uuid';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from 'actions';
import dataSort from 'domain/dataSort';
import {ALL, ACTIVE, COMPLETED} from 'constants/flagType';
import Icon from 'components/Icon';
import {ListContainer, ListChild, ListBtn, ListText} from './style';

const ListField = ({data, deleteTodo, checkTodo, filterFlag}) => {
  const filterItem = dataSort(data, filterFlag)
  return (
    <ListContainer>
      {filterItem.map((item, i) => (
        <ListChild key={uuid.v4()}>
          <Icon
            name={item.isCheck ? "check_circle" : "panorama_fish_eye"}
            action={() => checkTodo(item.id, !item.isCheck)}
          />
          <ListText>{item.text}</ListText>
          <ListBtn onClick={() => deleteTodo(item.id)}>×</ListBtn>
        </ListChild>
      ))}
    </ListContainer>
  )
}

const mapStateToProps = state => ({filterFlag: state.filterFlag.flag});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListField);
