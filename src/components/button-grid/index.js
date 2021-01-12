import React from 'react';
import PropTypes from 'prop-types';
import './button-grid.scss';

const ButtonGrid = ({ children }) => {
  return <div className="row button-grid">{children}</div>;
};

ButtonGrid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonGrid;
