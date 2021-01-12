import React from 'react';
import PropTypes from 'prop-types';
import './total.scss';

const Total = ({ total }) => {
  return (
    <div className="row total-container">
      <p className="title">Total</p>
      <h1 className="total">{Number(total)}</h1>
    </div>
  );
};

Total.propTypes = {
  total: PropTypes.number.isRequired,
};

export default Total;
