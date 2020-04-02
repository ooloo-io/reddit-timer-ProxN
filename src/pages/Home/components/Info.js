import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from './Info.styles';

const Info = ({ headline, children, id }) => (
  <section id={id}>
    <Heading>{headline}</Heading>
    {children}
  </section>
);

Info.propTypes = {
  headline: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

export default Info;
