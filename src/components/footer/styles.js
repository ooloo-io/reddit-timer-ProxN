import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  height: 100px;
  width: 100%;
`;

export const FooterContent = styled.div`
  padding: 0 250px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const LinkStyles = css`
  color: #636363;
  display: flex;
  align-items: center;
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary};
    font-size: ${theme.fontSizes.small};
  `}
`;

export const FooterLink = styled(Link)`
  ${LinkStyles};
`;

export const FooterLeftLink = styled.a`
  ${LinkStyles};
`;
