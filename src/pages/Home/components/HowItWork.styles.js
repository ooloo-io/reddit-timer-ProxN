import styled from 'styled-components';

export const SectionContainer = styled.section`
  width: 100%;
  padding: 134px 352px 0px 352px;
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 13px;
`;

export const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.grayBase};
  line-height: 27px;
`;
