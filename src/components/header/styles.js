import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  width: calc(100% - 160px);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const LogoLink = styled(Link)`
  cursor: pointer;
`;

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const MenuItem = styled.li`
  cursor: pointer;
  :not(:last-child) {
    margin-right: 26px;
  }
`;

export const MenuLink = styled(Link)`
  color: #636363;
  text-decoration: none;
  ${({ theme }) => {
    return css`
      font-family: ${theme.fonts.primary};
      font-size: ${theme.fontSizes.regular};
    `;
  }}
`;
