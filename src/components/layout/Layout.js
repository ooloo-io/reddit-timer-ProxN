import 'normalize.css';
import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from '../../styles/globalStyles';
import Header from '../header';
import Footer from '../footer';

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <Header />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
