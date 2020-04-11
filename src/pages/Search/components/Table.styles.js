import styled, { css } from 'styled-components';

export const TableContainer = styled.section`
  width: 786px;
  margin: 0 auto;
  margin-top: 28px;
`;

export const StyledTable = styled.table`
  width: 100%;
  margin-top: 12px;
`;
export const TableHeading = styled.th`
  ${({ theme }) => css`
    color: ${theme.colors.grayDark};
    font-size: ${theme.fontSizes.small};
  `};
  font-weight: 500;
  text-align: start;
`;

export const TableData = styled.td`
  ${({ theme }) => css`
    color: ${theme.colors.grayDark};
    font-size: ${theme.fontSizes.small};

    :first-child,
    :last-child {
      color: ${theme.colors.links.blue};
    }
  `};
  :first-child {
    max-width: 350px;
  }
  :last-child {
    max-width: 104px;
    padding: 0 14px 0 11px;
  }

  :last-child,
  :first-child {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
