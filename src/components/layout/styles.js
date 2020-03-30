import styled, { css } from 'styled-components';

export const LayoutContainer = styled.article`
  height: 100%;
  width: 100%;
`;

export const LayoutWrapper = styled.div`
  ${({ theme }) => css`
    min-height: calc(100% - ${theme.headerHeight} - ${theme.footerHeight});
  `}
`;
