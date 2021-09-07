import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavbarElements';
import { Button } from '../ButtonElements';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  font-weight:900;
  font-size:25px;
  width:120px;
  margin:10px 0;
`

const Navbar = ({ toggle, c }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])


  const newPage = () => {
    const w = window.open('about:blank');
    w.location.href = "https://cryptoleek-team.github.io/hub-dapp/"
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/'>
              <img src="./images/hub.png" alt="logo" />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to='/'
                  exact
                >{c.home}</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='/allEvents'
                  exact
                >{c.events}</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='/token'
                  exact
                >{c.token}</NavLinks>
              </NavItem>

              <StyledButton onClick={newPage}>APP</StyledButton>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
