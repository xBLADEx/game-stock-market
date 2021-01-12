import React from 'react';
import PropTypes from 'prop-types';
import './button-number.scss';

const ButtonNumber = ({ className, number }) => {
  return <button className={`button button--input ${className}`}>{number}</button>;
};

ButtonNumber.propTypes = {
  number: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ButtonNumber;
