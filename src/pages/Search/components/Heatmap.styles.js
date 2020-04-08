import styled, { css } from 'styled-components';

export const HeatmapContainer = styled.section`
  width: 100%;
  padding: 60px 163px 0 163px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 154px minmax(auto, 960px);
  grid-template-rows: 52px auto;
`;

export const DaysList = styled.div`
  grid-column: 1 /2;
  grid-row: 2 / -1;
  background: ${({ theme }) => theme.colors.darkBlue};
`;
export const DayItem = styled.div`
  line-height: 11px;
  font-size: 15px;
  height: 40px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  ${({ theme }) => css`
    color: ${theme.colors.grayLight};
  `};
`;

export const HoursList = styled.div`
  grid-column: 2/ -1;
  display: flex;
  ${({ theme }) => css`
    background-image: linear-gradient(
      to bottom,
      ${theme.colors.gray2},
      ${theme.colors.gray1}
    );
    border: 1px solid ${theme.colors.gray3};
  `};
`;
export const HourItem = styled.div`
  width: 80px;
  padding: 17px 0;
  font-weight: 500;
  display: flex;
  justify-content: center;
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.gray0};
  `};
`;

export const BoxesContainer = styled.div`
  grid-column: 2/-1;
  grid-row: 2/-2;
`;

export const BoxRow = styled.div`
  display: flex;
`;
export const TimeZone = styled.p`
  margin-top: 12px;
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.grayBase};
  `};
  span {
    font-weight: 700;
  }
`;
