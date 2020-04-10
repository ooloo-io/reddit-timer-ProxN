import styled, { css } from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ErrorText = styled.p`
  margin-top: 60px;
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.medium};
    color: ${theme.colors.red};
  `};
`;
