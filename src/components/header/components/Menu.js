import React from 'react';
import { MenuItem, MenuLink, MenuList } from './Menu.style';

const Menu = () => (
  <MenuList>
    <MenuItem>
      <MenuLink to="/search/javascript">Search</MenuLink>
    </MenuItem>
    <MenuItem>
      <MenuLink as="a" href="#how-it-works">
        How it works
      </MenuLink>
    </MenuItem>
    <MenuItem>
      <MenuLink as="a" href="#about">
        About
      </MenuLink>
    </MenuItem>
  </MenuList>
);
export default Menu;
