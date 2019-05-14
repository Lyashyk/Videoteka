import React from 'react';
import './container.css';

const Container = props => {
  return <div className="Container">{props.children}</div>;
};

export default Container;
