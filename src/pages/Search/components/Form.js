import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../../../components/button';
import { FormContainer, InputGroup, Prefixed, Input } from './Form.styles';

const Form = () => {
  const { push } = useHistory();
  const { subreddit } = useParams();
  const [query, setQuery] = useState(subreddit);

  const handleSubmit = e => {
    e.preventDefault();
    push(`/search/${query}`);
  };

  const handleChange = ({ target }) => setQuery(target.value);

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h1>Find the best time for a subreddit</h1>
      <InputGroup>
        <Prefixed>r /</Prefixed>
        <Input onChange={handleChange} value={query} />
        <Button>Search</Button>
      </InputGroup>
    </FormContainer>
  );
};

export default Form;
