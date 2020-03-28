import 'normalize.css';
import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from '../../styles/globalStyles';
import Header from '../header';

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <Header />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
