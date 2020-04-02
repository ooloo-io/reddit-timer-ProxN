import React from 'react';
import Info from './Info';
import {
  InfoSectionContainer,
  List,
  ListItem,
  Text,
  TextLink,
} from './Info.styles';

const InfoSection = () => (
  <InfoSectionContainer>
    <Info id="how-it-works" headline="How it works">
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
    </Info>
    <Info id="about" headline="About">
      <Text>
        This app was created during a course on&nbsp;
        <TextLink href="https://ooloo.io" target="_blank">
          ooloo.io
        </TextLink>
        &nbsp;with the goal to implement a pixel-perfect real-world application
        with professional workflows and tools like Kanban, Asana, Zeplin,
        GitHub, pull requests and code reviews.&nbsp;
        <TextLink href="https://ooloo.io/employers">
          Click here for more information.
        </TextLink>
      </Text>
    </Info>
  </InfoSectionContainer>
);
export default InfoSection;
