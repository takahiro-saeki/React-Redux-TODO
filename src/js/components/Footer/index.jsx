import React from 'react';
import {FooterContainer, MenuList, MenuListChild} from './style';

const Footer = () => (
  <FooterContainer>
    <MenuList>
      <MenuListChild>REMAIN ITEM IS </MenuListChild>
      <MenuListChild>ALL</MenuListChild>
      <MenuListChild>ACTIVE</MenuListChild>
      <MenuListChild>COMPLETED</MenuListChild>
    </MenuList>
  </FooterContainer>
)

export default Footer;
