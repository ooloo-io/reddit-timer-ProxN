import React from 'react';
import PropTypes from 'prop-types';
import StyledBox from './Box.styles';

const Box = ({
  index, handleActive, selected, posts, setPosts,
}) => {
  const handleClick = () => {
    handleActive(index);
    setPosts(posts);
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
  handleActive: PropTypes.func.isRequired,
  setPosts: PropTypes.func.isRequired,
};

export default Box;
