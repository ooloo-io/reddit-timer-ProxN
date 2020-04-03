import React from 'react';
import dayjs from 'dayjs';
import axios from 'axios';
import SearchContainer from './styles';
import Form from './components/Form';
import config from '../../constants/config';

const SearchPage = () => {
  const loadData = async (subreddit) => {
    const size = 500;
    const date = dayjs()
      .subtract(1, 'year')
      .unix();

    const query = `?subreddit=${subreddit}&size=${size}&sort=desc&sort_type=score&after=${date}`;
    const URL = `${config.BASE_URL}search/submission/${query}`;
    await axios.get(URL);
  };
  return (
    <SearchContainer>
      <Form loadData={loadData} />
    </SearchContainer>
  );
};

export default SearchPage;
