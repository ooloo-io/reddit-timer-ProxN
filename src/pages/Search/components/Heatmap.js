import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Table from './Table';
import Box from './Box';

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

const Heatmap = ({ posts }) => {
  const [selected, setSelected] = useState('');
  const [timePosts, setTimePosts] = useState([]);

  const rows = posts.map((el, elIndex) => {
    const columns = el.map((totalPosts, i) => {
      const { day, hour } = selected;
      return (
        <Box
          // eslint-disable-next-line react/no-array-index-key
          key={`${elIndex}-${i}`}
          index={{ day: elIndex, hour: i }}
          selected={day === elIndex && hour === i}
          setSelected={setSelected}
          setTimePosts={setTimePosts}
          posts={totalPosts}
        />
      );
    });
    // eslint-disable-next-line react/no-array-index-key
    return <BoxRow key={elIndex}>{columns}</BoxRow>;
  });

  return (
    <>
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
      {timePosts.length > 0 && <Table posts={timePosts} />}
    </>
  );
};

Heatmap.propTypes = {
  posts: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Heatmap;
