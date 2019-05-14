import React from 'react';

import './select.css';

const Select = ({ options, onChangeFunction, term, ...rest }) => {
  return (
    <select
      className="Select"
      {...rest}
      value={term}
      onChange={onChangeFunction}
    >
      {options}
      {/* <option>VHS</option>
      <option>DVD</option>
      <option>Blu-Ray</option>
      <option>Mp4</option> */}
    </select>
  );
};

export default Select;
