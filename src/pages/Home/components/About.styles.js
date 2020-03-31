import styled from 'styled-components';

export const AboutSection = styled.section`
  width: 100%;
  padding: 105px 352px 0px 352px;
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
