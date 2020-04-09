import styled, { css } from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 29px;
  justify-content: center;
`;

export const Prefixed = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.medium};
    color: ${theme.colors.label};
  `};
  line-height: 9px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-right: 10px;
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 2px;
  padding: 8px 0 10px 16px;
  width: 370px;
  outline: none;
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.grayDark};
  `};
  margin-right: 10px;
`;
