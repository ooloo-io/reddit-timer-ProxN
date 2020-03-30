import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.headerHeight};
  width: 100%;
`;

export const FooterContent = styled.div`
  padding: 0 251px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkStyles = css`
  text-decoration: none;
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary};
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.links.gray};
  `}
  flex:1;
`;

export const FooterLink = styled(Link)`
  ${LinkStyles};
  text-align: right;
`;

export const FooterLeftLink = styled.a`
  ${LinkStyles};
`;

export const LogoLink = styled(Link)`
  height: 36px;
  width: 36px;
`;
