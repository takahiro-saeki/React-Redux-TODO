import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from 'actions/footerAction';
import {ALL, ACTIVE, COMPLETED} from 'constants/flagType';
import {FooterContainer, MenuList, MenuListChild, MainLength} from './style';

const Footer = ({len, activeTodo, filterFlag, footerSort}) => (
  <FooterContainer>
    <MainLength>REMAIN ITEM IS {len}</MainLength>
    <MenuList>
      <MenuListChild onClick={() => footerSort(ALL)}>{ALL}</MenuListChild>
      <MenuListChild onClick={() => footerSort(ACTIVE)}>{ACTIVE}</MenuListChild>
      <MenuListChild onClick={() => footerSort(COMPLETED)}>{COMPLETED}</MenuListChild>
    </MenuList>
  </FooterContainer>
)

const mapStateToProps = state => ({filterFlag: state.filterFlag});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
