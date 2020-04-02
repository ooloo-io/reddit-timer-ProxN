import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubTitle = styled.h3`
  margin-top: 20px;
  margin-bottom: 45px;
`;

export const SubReddit = styled.p`
  font-weight: 500;
  margin-top: 47px;
`;

export const HeatMapLink = styled(Link)`
  margin-top: 36px;
`;
