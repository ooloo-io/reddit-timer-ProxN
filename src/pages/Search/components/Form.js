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
  const { location, push } = useHistory();

  const ParseQuery = (queryString) => queryString.split('=')[1];
  const [query, setQuery] = useState(ParseQuery(location.search));

  const handleSubmit = (e) => {
    e.preventDefault();
    push(`/search?q=${query}`);
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
