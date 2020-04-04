import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import loadData from '../../api/posts';
import Loader from '../../components/loader';
import Form from './components/Form';
import SearchContainer from './styles';

const SearchPage = () => {
  const [loading, setLoading] = useState(false);
  const { subreddit } = useParams();

  useEffect(() => {
    setLoading(true);
    const onLoad = async () => {
      await loadData(subreddit);
      setLoading(false);
    };
    onLoad();
  }, [subreddit]);

  return (
    <SearchContainer>
      <Form />
      {loading && <Loader />}
    </SearchContainer>
  );
};

export default SearchPage;
