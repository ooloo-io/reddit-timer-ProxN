import React from 'react';
import { HomeContainer, HomeContent } from './styles';
import Hero from './components/Hero';

const HomePage = () => (
  <HomeContainer>
    <HomeContent>
      <Hero />
    </HomeContent>
  </HomeContainer>
);

export default HomePage;
