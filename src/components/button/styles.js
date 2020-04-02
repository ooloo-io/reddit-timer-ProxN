import styled, { css } from 'styled-components';

export default styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 4px;
  line-height: 9px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.grayLight};
    font-family: ${theme.fonts.primary};
    font-size: ${theme.fontSizes.small};
  `}
  padding:0 16px;
  height: 36px;
  font-weight: 500;
`;
