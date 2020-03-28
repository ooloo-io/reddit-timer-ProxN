import React from 'react';
import { MenuItem, MenuLink, MenuList } from './Menu.style';

const Menu = () => (
  <MenuList>
    <MenuItem>
      <MenuLink to="/search">Search</MenuLink>
    </MenuItem>
    <MenuItem>
      <MenuLink>How it works</MenuLink>
    </MenuItem>
    <MenuItem>
      <MenuLink>About</MenuLink>
    </MenuItem>
  </MenuList>
);
export default Menu;
