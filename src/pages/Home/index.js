import React from 'react';
import { HomeContainer, HomeContent } from './styles';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';

const HomePage = () => (
  <HomeContainer>
    <HomeContent>
      <Hero />
      <InfoSection />
    </HomeContent>
  </HomeContainer>
);

export default HomePage;
