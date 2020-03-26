import 'normalize.css';
import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from '../../styles/globalStyles';

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
export default Layout;
