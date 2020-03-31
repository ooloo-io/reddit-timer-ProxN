import React from 'react';
import { HomeContainer, HomeContent } from './styles';
import Hero from './components/Hero';
import HowItWork from './components/HowItWork';
import About from './components/About';

const HomePage = () => (
  <HomeContainer>
    <HomeContent>
      <Hero />
      <HowItWork />
      <About />
    </HomeContent>
  </HomeContainer>
);

export default HomePage;
