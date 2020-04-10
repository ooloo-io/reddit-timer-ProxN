import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
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

  const handleActive = (key) => setSelected(key);

  const setPosts = (selectedPosts) => setTimePosts(selectedPosts);

  const rows = posts.map((el, elIndex) => {
    const columns = el.map((totalPosts, i) => {
      const { length } = totalPosts;
      const key = `${elIndex}-${length}-${i}`;
      return (
        <Box
          key={key}
          index={key}
          selected={selected === key}
          handleActive={handleActive}
          setPosts={setPosts}
          posts={totalPosts}
        />
      );
    });
    return <BoxRow key={uuid()}>{columns}</BoxRow>;
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
