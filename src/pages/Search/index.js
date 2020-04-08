import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import loadData from '../../api/posts';
import Loader from '../../components/loader';
import Form from './components/Form';
import Heatmap from './components/Heatmap';
import SearchContainer from './styles';

const SearchPage = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState({});
  const { subreddit } = useParams();
  useEffect(() => {
    setLoading(true);
    const onLoad = async () => {
      try {
        const res = await loadData(subreddit);
        setPosts(res);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    onLoad();
  }, [subreddit]);

  return (
    <main>
      <SearchContainer>
        <Form />
        {loading && <Loader />}
        {Object.entries(posts).length > 0 && <Heatmap posts={posts} />}
      </SearchContainer>
    </main>
  );
};

export default SearchPage;
