import React from 'react';
import { AboutSection, Text, TextLink } from './About.styles';
import { Heading } from '../styles';

const About = () => (
  <AboutSection>
    <Heading>About</Heading>
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
  </AboutSection>
);

export default About;
