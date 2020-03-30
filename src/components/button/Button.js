import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, StyledLink } from './styles';

const Button = ({ label, href, size }) => {
  if (href) {
    return (
      <StyledLink size={size} to={href}>
        {label}
      </StyledLink>
    );
  }

  return <StyledButton>{label}</StyledButton>;
};

Button.defaultProps = {
  href: '',
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  href: PropTypes.string,
};

export default Button;
