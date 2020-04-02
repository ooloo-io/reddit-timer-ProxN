import React from 'react';
import { Link } from 'react-router-dom';
import Table from '../table.png';
import {
  HeroContainer, SubTitle, SubReddit, HeatMapLink,
} from './Hero.styles';
import Button from '../../../components/button';

const Hero = () => (
  <HeroContainer>
    <h1>No reactions to your reddit posts?</h1>
    <SubTitle>
      Great timing, great results! Find the best time to post on your subreddit.
    </SubTitle>
    <Button to="/search/javascript" as={Link}>
      Show me the best time
    </Button>
    <SubReddit>r/javascript</SubReddit>
    <HeatMapLink to="/search/javascript">
      <img src={Table} alt="results" />
    </HeatMapLink>
  </HeroContainer>
);

export default Hero;
