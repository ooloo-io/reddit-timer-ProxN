import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import GlobalStyles from '../../styles/globalStyles';

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
export default Layout;
