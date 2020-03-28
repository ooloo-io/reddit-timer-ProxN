import React from 'react';
import Logo from './components/Logo';
import { HeaderContainer, Nav } from './styles';
import Menu from './components/Menu';

const Header = () => (
  <HeaderContainer>
    <Nav>
      <Logo />
      <Menu />
    </Nav>
  </HeaderContainer>
);

export default Header;
