import React from 'react';
import uuid from 'uuid';
import {ListContainer, ListChild} from './style';

const ListField = ({data}) => (
  <ListContainer>
    {data.map((data, i) => <ListChild key={uuid.v4()}>{data.text}</ListChild>)}
  </ListContainer>
)

export default ListField;
