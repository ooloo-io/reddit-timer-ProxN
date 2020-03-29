import React from 'react';
import Logo from './components/Logo';
import {
  FooterContainer,
  FooterContent,
  FooterLink,
  FooterLeftLink,
} from './styles';

const Footer = () => (
  <FooterContainer>
    <FooterContent>
      <FooterLeftLink href="https://ooloo.io" target="_blank">
        ooloo.io
      </FooterLeftLink>
      <Logo />
      <FooterLink to="/terms">Terms & Privacy</FooterLink>
    </FooterContent>
  </FooterContainer>
);

export default Footer;
