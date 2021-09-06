import React from 'react';
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle, c }) => {
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
    </SidebarContainer>
  );
};

export default Sidebar;

