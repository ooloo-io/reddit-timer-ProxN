import React from 'react';
import LoaderContainer from './styles';
import { ReactComponent as Spinner } from './loading.svg';

const Loader = () => (
  <LoaderContainer>
    <Spinner />
  </LoaderContainer>
);
export default Loader;
