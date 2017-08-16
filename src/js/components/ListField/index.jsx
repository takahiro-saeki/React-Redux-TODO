import React from 'react';
import uuid from 'uuid';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from 'actions';
import {ListContainer, ListChild, ListBtn, ListText} from './style';
import Icon from 'components/Icon';

const ListField = ({data, deleteTodo}) => (
  <ListContainer>
    {data.map((item, i) => (
      <ListChild key={uuid.v4()}>
        <Icon name={item.isCheck ? "check_circle" : "panorama_fish_eye"}/>
        <ListText>{item.text}</ListText>
        <ListBtn onClick={() => deleteTodo(item.id)}>×</ListBtn>
      </ListChild>
    ))}
  </ListContainer>
)

const mapStateToProps = state => ({todo: state.todo});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListField);
