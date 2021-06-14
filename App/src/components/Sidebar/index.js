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
          <SidebarLink to='home' onClick={toggle}>{c.home}</SidebarLink>
          <SidebarLink to='about' onClick={toggle}>{c.about}</SidebarLink>
          <SidebarLink to='events' onClick={toggle}>{c.events}</SidebarLink>
          {/* <SidebarLink to='team' onClick={toggle}>{c.team}</SidebarLink> */}
          <SidebarLink to='career' onClick={toggle}>{c.career}</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

