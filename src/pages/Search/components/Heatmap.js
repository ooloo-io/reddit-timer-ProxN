import React from 'react';
import PropTypes from 'prop-types';
import config from '../../../constants/config';
import {
  HeatmapContainer,
  Grid,
  DaysList,
  DayItem,
  HoursList,
  HourItem,
  BoxesContainer,
  BoxRow,
  TimeZone,
} from './Heatmap.styles';
import Box from './Box';

const Heatmap = ({ posts }) => {
  const rows = posts.map((el) => {
    const columns = el.map((totalPosts) => (
      <Box numTotalPosts={totalPosts.length} />
    ));
    return <BoxRow key={el}>{columns}</BoxRow>;
  });

  return (
    <HeatmapContainer>
      <Grid>
        <HoursList>
          {config.hours.map((hour) => (
            <HourItem key={hour}>{hour}</HourItem>
          ))}
        </HoursList>
        <DaysList>
          {config.days.map((day) => (
            <DayItem key={day}>{day}</DayItem>
          ))}
        </DaysList>
        <BoxesContainer>{rows}</BoxesContainer>
      </Grid>
      <TimeZone>
        All times are shown in your timezone:&nbsp;
        <span>{Intl.DateTimeFormat().resolvedOptions().timeZone}</span>
      </TimeZone>
    </HeatmapContainer>
  );
};

Heatmap.propTypes = {
  posts: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Heatmap;
