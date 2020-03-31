import React from 'react';
import { SectionContainer, List, ListItem } from './HowItWork.styles';
import { Heading } from '../styles';

const HowItWork = () => (
  <SectionContainer>
    <Heading>How it works</Heading>
    <List>
      <ListItem>
        • We find the 500 top posts from the past year for a subreddit.
      </ListItem>
      <ListItem>
        • The data is visualized in a heatmap grouped by weekday and hour of
        the day.
      </ListItem>
      <ListItem>• See immediately when to submit your reddit post.</ListItem>
    </List>
  </SectionContainer>
);

export default HowItWork;
