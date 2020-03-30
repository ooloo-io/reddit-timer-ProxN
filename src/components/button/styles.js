import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const sizes = {
  small: 'width:92px;height:36px;',
  large: 'width:217px;height:36px;',
};

const defaultStyle = css`
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
`;

export const StyledButton = styled.button`
  text-transform: uppercase;
  ${(props) => sizes[props.size]};
  ${defaultStyle};
`;

export const StyledLink = styled(Link)`
  ${defaultStyle};
  ${(props) => sizes[props.size]};
`;
