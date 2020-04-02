import styled, { css } from 'styled-components';
import button from '../../../components/button';

export const FormContainer = styled.form`
  margin-top: 26px;
`;

export const FormTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  justify-content: center;
  margin-left: -1px;
`;

export const Prefixed = styled.label`
  color: #9e9e9e;
  line-height: 9px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-right: 10px;
`;

export const Input = styled.input`
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  padding: 8px 0 10px 16px;
  width: 370px;
  outline: none;
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.grayDark};
  `};
  margin-right: 11px;
`;

export const Button = styled(button)`
  padding: 13px 15px 14px 15px;
`;
