import styled from 'styled-components';

export const HomeContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const HomeContent = styled.div`
  padding: 27px 0 99px 0;
  width: 100%;
`;

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
`;
