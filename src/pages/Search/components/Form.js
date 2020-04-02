import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  FormContainer,
  FormTitle,
  InputGroup,
  Prefixed,
  Input,
  Button,
} from './Form.styles';

const Form = () => {
  const [query, setQuery] = useState('javascript');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?q=${query}`);
  };

  const handleChange = (e) => {
    const { target } = e;
    setQuery(target.value);
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Find the best time for a subreddit</FormTitle>
      <InputGroup>
        <Prefixed>r /</Prefixed>
        <Input onChange={handleChange} value={query} />
        <Button>Search</Button>
      </InputGroup>
    </FormContainer>
  );
};

export default Form;
