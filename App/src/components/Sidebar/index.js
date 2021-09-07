import React from 'react';
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SideBtnWrap
} from './SidebarElements';

import { Button } from '../ButtonElements';
import styled from 'styled-components';


const StyledButton = styled(Button)`
  font-weight:900;
  font-size:25px;
  width:120px;
  margin:10px 0;
`

const Sidebar = ({ isOpen, toggle, c }) => {
  const newPage = () => {
    const w = window.open('about:blank');
    w.location.href = "https://cryptoleek-team.github.io/hub-dapp/"
  }

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='/' onClick={toggle}>{c.home}</SidebarLink>
          <SidebarLink to='/allEvents' onClick={toggle}>{c.events}</SidebarLink>
          <SidebarLink to='/token' onClick={toggle}>{c.events}</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>

      <SideBtnWrap>
        <StyledButton onClick={newPage}>
          APP
        </StyledButton>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;

