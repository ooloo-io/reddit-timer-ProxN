import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import config from '../../../constants/config';
import {
  TableContainer,
  StyledTable,
  TableHeading,
  TableData,
} from './Table.styles';

const Table = ({ posts }) => {
  const minutes = (unix) => dayjs.unix(unix).get('m');

  posts.sort((a, b) => minutes(a.created_utc) - minutes(b.created_utc));

  return (
    <TableContainer>
      <h2>Posts</h2>

      <StyledTable>
        <tr>
          <TableHeading>Title</TableHeading>
          <TableHeading>Time Posted</TableHeading>
          <TableHeading>Score</TableHeading>
          <TableHeading>Comments</TableHeading>
          <TableHeading>Author</TableHeading>
        </tr>
        {posts.map((post) => (
          <tr>
            <TableData>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={post.full_link}
              >
                {post.title}
              </a>
            </TableData>
            <TableData>
              {dayjs.unix(post.created_utc).format('h:mma')}
            </TableData>
            <TableData>{post.score}</TableData>
            <TableData>{post.num_comments}</TableData>
            <TableData>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`${config.REDDIT_USER}${post.author}`}
              >
                {post.author}
              </a>
            </TableData>
          </tr>
        ))}
      </StyledTable>
    </TableContainer>
  );
};

Table.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
