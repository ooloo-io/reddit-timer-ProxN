import React from 'react';
import PropTypes from 'prop-types';
import StyledBox from './Box.styles';

const Box = ({
  index, setSelected, selected, posts,
}) => {
  const handleClick = () => {
    setSelected(index);
  };

  return (
    <StyledBox
      data-testid={`box-${index.day}-${index.hour}`}
      focused={selected}
      onClick={handleClick}
      numTotalPosts={posts.length}
    >
      {posts.length}
    </StyledBox>
  );
};

Box.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.objectOf(PropTypes.number).isRequired,
  selected: PropTypes.bool.isRequired,
  setSelected: PropTypes.func.isRequired,
};

export default Box;
