// Menu.js

import React, { useState } from 'react';
import { MenuContainer, MenuList, MenuItem, MenuLink } from './style';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuContainer>
      <MenuList>
        <MenuItem><MenuLink href="#">Localização</MenuLink></MenuItem>
        <MenuItem><MenuLink href="#">Gastronomia</MenuLink></MenuItem>
        <MenuItem><MenuLink href="#">Galeria</MenuLink></MenuItem>
      </MenuList>
    </MenuContainer>
  );
};

export default Menu;
