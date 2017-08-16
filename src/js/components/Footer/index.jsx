import React from 'react';
import {FooterContainer, MenuList, MenuListChild, MainLength} from './style';

const Footer = ({len}) => (
  <FooterContainer>
    <MainLength>REMAIN ITEM IS {len}</MainLength>
    <MenuList>
      <MenuListChild>ALL</MenuListChild>
      <MenuListChild>ACTIVE</MenuListChild>
      <MenuListChild>COMPLETED</MenuListChild>
    </MenuList>
  </FooterContainer>
)

export default Footer;
