import React from 'react';

import './button-icon.css';

const ButtonIcon = props => {
  const { icon, ...rest } = props;
  return (
    <button className="ButtonIcon" {...rest}>
      <span className="ButtonIcon-holder">{icon}</span>
    </button>
  );
};

export default ButtonIcon;
