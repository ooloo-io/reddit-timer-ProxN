import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  width: 100%;
  padding: 0 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const LogoLink = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
`;
