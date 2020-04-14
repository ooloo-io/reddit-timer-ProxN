import React from 'react';
import LoaderContainer from './styles';
import { ReactComponent as Spinner } from './loading.svg';

const Loader = () => (
  <LoaderContainer data-testid="loader">
    <Spinner />
  </LoaderContainer>
);
export default Loader;
