import styled from 'styled-components';
// import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#07183d' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  aligh-items: center;
  font-size:1rem;
  position: sticky;
  top: 0;
  z-index: 11;
  opacity: 0.9;
  backdrop-filter: ${({ scrollNav }) => (scrollNav ? 'blur(25px)' : 'transparent')};

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index:1;
  width: 100%;
  padding:0 24px;
  width: 95%;
`;

export const NavLogo = styled(LinkS)`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100px;
  margin-left: 30px;
  img {
    height: 90%;
    margin:5px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 10px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;


  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #cad9e5;
  }
`;

export const NavBtn = styled.nav`
  color: #fff;
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: 30px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none;
  }
`