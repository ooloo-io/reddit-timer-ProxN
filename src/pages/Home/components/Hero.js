import React from 'react';
import { Link } from 'react-router-dom';
import Table from '../table.png';
import {
  HeroContainer,
  Title,
  SubTitle,
  SubReddit,
  HeatMapLink,
} from './Hero.styles';
import Button from '../../../components/button';

const Hero = () => (
  <HeroContainer>
    <Title>No reactions to your reddit posts?</Title>
    <SubTitle>
      Great timing, great results! Find the best time to post on your subreddit.
    </SubTitle>
    <Button to="/search?q=javascript" as={Link}>
      Show me the best time
    </Button>
    <SubReddit>r/javascript</SubReddit>
    <HeatMapLink to="/search?q=javascript">
      <img src={Table} alt="results" />
    </HeatMapLink>
  </HeroContainer>
);

export default Hero;
