import React from 'react';
import PropTypes from 'prop-types';
import './history.scss';

const History = ({ history }) => {
  return (
    <div className="row">
      <div className="bar">{history}</div>
    </div>
  );
};

History.propTypes = {
  history: PropTypes.number.isRequired,
};

export default History;
