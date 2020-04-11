import React from 'react';
import PropTypes from 'prop-types';
import StyledBox from './Box.styles';

const Box = ({
  index, setSelected, selected, posts, setTimePosts,
}) => {
  const handleClick = () => {
    setSelected(index);
    setTimePosts(posts);
  };

  return (
    <StyledBox
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
  index: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  setSelected: PropTypes.func.isRequired,
  setTimePosts: PropTypes.func.isRequired,
};

export default Box;
