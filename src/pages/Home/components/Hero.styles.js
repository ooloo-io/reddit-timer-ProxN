import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.grayDark};
    font-size: ${theme.fontSizes.xlarge};
  `};
  font-weight: normal;
  margin: 0;
`;

const TextStyle = css`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary};
    font-size: ${theme.fontSizes.regular};
    color: ${theme.colors.grayBase};
  `};
`;

export const SubTitle = styled.h3`
  ${TextStyle};
  font-weight: normal;
  margin-top: 20px;
  margin-bottom: 46px;
`;

export const SubReddit = styled.p`
  font-weight: 500;
  ${TextStyle};
  margin-top: 46px;
`;

export const HeatMapLink = styled(Link)`
  margin-top: 37px;
`;
