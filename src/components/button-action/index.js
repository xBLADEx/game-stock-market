import React from 'react';
import PropTypes from 'prop-types';
import './button-action.scss';

const ButtonAction = ({ className, type, name }) => {
  return (
    <button className={`button button--input ${className}`} onClick={type}>
      {name}
    </button>
  );
};

ButtonAction.propTypes = {
  type: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ButtonAction;
