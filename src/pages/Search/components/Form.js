import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../../../components/button';
import Loader from '../../../components/loader';
import {
  FormContainer, InputGroup, Prefixed, Input,
} from './Form.styles';

const Form = ({ loadData }) => {
  const { push } = useHistory();
  const { subreddit } = useParams();
  const [query, setQuery] = useState(subreddit);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onLoad = async () => {
      setLoading(true);
      await loadData(query);
      setLoading(false);
    };
    onLoad();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    push(`/search/${query}`);
    await loadData(query);
    setLoading(false);
  };

  const handleChange = ({ target }) => setQuery(target.value);

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <h1>Find the best time for a subreddit</h1>
        <InputGroup>
          <Prefixed>r /</Prefixed>
          <Input onChange={handleChange} value={query} />
          <Button>Search</Button>
        </InputGroup>
      </FormContainer>
      {loading && <Loader />}
    </>
  );
};

Form.propTypes = {
  loadData: PropTypes.func.isRequired,
};

export default Form;
