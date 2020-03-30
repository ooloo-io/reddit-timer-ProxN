import React from 'react';
import Table from '../table.png';
import {
  HeroContainer,
  Title,
  SubTitle,
  SubReddit,
  HeatMapLink,
} from './Hero.styles';
import Button from '../../../components/button/Button';

const Hero = () => (
  <HeroContainer>
    <Title>No reactions to your reddit posts?</Title>
    <SubTitle>
      Great timing, great results! Find the best time to post on your subreddit.
    </SubTitle>
    <Button
      size="large"
      href="/search?q=javascript"
      label="Show me the best time"
    />
    <SubReddit>r/javascript</SubReddit>
    <HeatMapLink to='/search?q="javascript'>
      <img src={Table} alt="results" />
    </HeatMapLink>
  </HeroContainer>
);

export default Hero;
