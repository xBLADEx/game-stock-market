import React from 'react';
import PropTypes from 'prop-types';
import './history.scss';

const History = ({ history }) => {
  return (
    <div className="row">
      <div className="bar">{history.map((item) => item)}</div>
    </div>
  );
};

History.propTypes = {
  history: PropTypes.array.isRequired,
};

export default History;
