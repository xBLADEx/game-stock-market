import React from 'react';
import PropTypes from 'prop-types';
import './button-number.scss';

const ButtonNumber = ({ className, number, clicked }) => {
  return (
    <button className={`button button--input ${className}`} onClick={clicked}>
      {number}
    </button>
  );
};

ButtonNumber.propTypes = {
  number: PropTypes.string.isRequired,
  className: PropTypes.string,
  clicked: PropTypes.func.isRequired,
};

export default ButtonNumber;
