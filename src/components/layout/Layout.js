import 'normalize.css';
import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from '../../styles/globalStyles';
import Header from '../header';
import Footer from '../footer';
import { LayoutContainer, LayoutWrapper } from './styles';

const Layout = ({ children }) => (
  <LayoutContainer>
    <GlobalStyles />
    <Header />
    <LayoutWrapper>{children}</LayoutWrapper>
    <Footer />
  </LayoutContainer>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
