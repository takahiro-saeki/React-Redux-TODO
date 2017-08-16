import React from 'react';
import {IconStyle} from './style';

const Icon = ({name, action}) => (
  <IconStyle className="material-icons" onClick={action}>{name}</IconStyle>
)

export default Icon;
