// style.js

import styled from 'styled-components';

export const MenuContainer = styled.nav`
  
  padding: 10px;
`;

export const MenuList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items:center ;
  justify-content: center;
  font-size: 120%;
`;

export const MenuItem = styled.li`
  margin-right: 20px;
`;

export const MenuLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  &:hover {
    color: #ffd700;
  }
`;
