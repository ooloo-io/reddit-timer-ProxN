import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import {
  FooterContainer,
  FooterContent,
  FooterLink,
  FooterLeftLink,
  LogoLink,
} from './styles';

const Footer = () => (
  <FooterContainer>
    <FooterContent>
      <FooterLeftLink href="https://ooloo.io" target="_blank">
        ooloo.io
      </FooterLeftLink>
      <LogoLink to="/">
        <Logo />
      </LogoLink>
      <FooterLink to="/terms">Terms & Privacy</FooterLink>
    </FooterContent>
  </FooterContainer>
);

export default Footer;
