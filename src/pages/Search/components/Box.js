import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StyledBox from './Box.styles';

const Box = ({ numTotalPosts }) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = () => setFocused(!focused);
  return (
    <StyledBox
      focused={focused}
      onClick={handleFocus}
      numTotalPosts={numTotalPosts}
    >
      {numTotalPosts}
    </StyledBox>
  );
};

Box.propTypes = {
  numTotalPosts: PropTypes.number.isRequired,
};

export default Box;
