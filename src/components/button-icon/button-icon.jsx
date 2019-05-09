import React from 'react';

import './button-icon.css';

const ButtonIcon = props => {
  const { icon } = props;
  return (
    <button className="ButtonIcon">
      <span className="ButtonIcon-holder">{icon}</span>
    </button>
  );
};

export default ButtonIcon;
