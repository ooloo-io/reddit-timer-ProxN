import styled from 'styled-components';

export const InfoSectionContainer = styled.section`
  width: 100%;
  padding: 134px 352px 0 352px;
`;

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 13px;
  margin-bottom: 105px;
`;

export const ListItem = styled.li`
  line-height: 27px;
`;

export const Text = styled.p`
  margin-top: 15px;
  line-height: 27px;
`;

export const TextLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.links.blue};
`;
