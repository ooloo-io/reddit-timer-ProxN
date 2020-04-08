import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StyledBox from './Box.styles';
import getColor from '../../../utils/getColor';

const Box = ({ totalPosts }) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = () => {
    setFocused(!focused);
  };
  return (
    <StyledBox
      focused={focused}
      onClick={handleFocus}
      color={getColor(totalPosts)}
    >
      {totalPosts}
    </StyledBox>
  );
};

Box.propTypes = {
  totalPosts: PropTypes.number.isRequired,
};

export default Box;
