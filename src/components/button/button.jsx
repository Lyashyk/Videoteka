import React from 'react';

import './button.css';

const Button = ({ title, handleClick }) => {
  return (
    <button className="Button" onClick={handleClick} type="button">
      {title}
    </button>
  );
};

export default Button;
