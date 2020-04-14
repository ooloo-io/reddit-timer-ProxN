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
  const { day, hour } = selected;

  const rows = posts.map((el, elIndex) => {
    const columns = el.map((totalPosts, i) => (
      <Box
        // eslint-disable-next-line react/no-array-index-key
        key={`${elIndex}-${i}`}
        index={{ day: elIndex, hour: i }}
        selected={day === elIndex && hour === i}
        setSelected={setSelected}
        posts={posts[elIndex][i]}
      />
    ));
    // eslint-disable-next-line react/no-array-index-key
    return <BoxRow key={elIndex}>{columns}</BoxRow>;
  });

  return (
    <>
      <HeatmapContainer data-testid="heatmap">
        <Grid>
          <HoursList>
            {config.hours.map((h) => (
              <HourItem key={h}>{h}</HourItem>
            ))}
          </HoursList>
          <DaysList>
            {config.days.map((d) => (
              <DayItem key={d}>{d}</DayItem>
            ))}
          </DaysList>
          <BoxesContainer>{rows}</BoxesContainer>
        </Grid>
        <TimeZone>
          All times are shown in your timezone:&nbsp;
          <span>{Intl.DateTimeFormat().resolvedOptions().timeZone}</span>
        </TimeZone>
      </HeatmapContainer>
      {posts[day] && posts[day][hour].length > 0 && (
        <Table posts={posts[day][hour]} />
      )}
    </>
  );
};

Heatmap.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default Heatmap;
