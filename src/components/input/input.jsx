import React from 'react';

import './input.css';

const Input = ({ onChangeFunction, term, placeholder, ...rest }) => {
  return (
    <div className="Input">
      <input
        className="Input-field"
        {...rest}
        placeholder={placeholder}
        value={term}
        onChange={onChangeFunction}
      />
    </div>
  );
};

export default Input;
