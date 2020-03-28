import 'normalize.css';
import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from '../../styles/globalStyles';
import Header from '../header';

const layout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      {children}
    </div>
  );
};

layout.propTypes = {
  children: PropTypes.node.isRequired
};
export default layout;
