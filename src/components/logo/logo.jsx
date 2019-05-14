import React from 'react';
import { Link } from 'react-router-dom';

import './logo.css';

const Logo = () => {
  return (
    <div className="Logo">
      <Link className="Logo-link" to="/" title="Home Page">
        <span className="Logo-firstWord">Video</span>
        <span className="Logo-secondWord">Teka</span>
      </Link>
    </div>
  );
};

export default Logo;
