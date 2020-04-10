import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import loadData from '../../api/posts';
import Loader from '../../components/loader';
import Form from './components/Form';
import Heatmap from './components/Heatmap';
import SearchContainer, { ErrorText } from './styles';

const SearchPage = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const { subreddit } = useParams();
  useEffect(() => {
    setLoading(true);
    setPosts([]);
    setError('');
    const onLoad = async () => {
      try {
        const res = await loadData(subreddit);
        setPosts(res);
        setError('');
      } catch (err) {
        setError(err.message);
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
        {error && <ErrorText>{error}</ErrorText>}
        {posts.length > 0 && <Heatmap posts={posts} />}
      </SearchContainer>
    </main>
  );
};

export default SearchPage;
