import { connect } from 'react-redux';
import React from 'react';

const options = ['asc', 'desc'];

const SortSelect = (state, onClick) => {
  const { restOfState } = state;
  const optionElements = options.map(option => (
    <option key={option} value={option}>
      {option}
    </option>
  ));

  return (
    <select className="form-control" onChange={onClick} {...restOfState}>
      {optionElements}
    </select>
  );
};

export default SortSelect;
