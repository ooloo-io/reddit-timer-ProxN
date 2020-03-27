import React from 'react';
import { MenuItem, MenuLink, MenuList } from '../styles';

const Menu = () => {
  return (
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
};
export default Menu;
