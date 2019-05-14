import React from 'react';

import './page.css';

import Header from '../header/header';
import Dashboard from '../dashboard/dashboard';
import ButtonSortContainer from '../../containers/button-sort-container';

const Page = props => {
  return (
    <div className="Page">
      <Dashboard />
      <div className="Page-header">
        <Header />
      </div>

      <div className="Page-filter">
        <ButtonSortContainer title="Sort" />
      </div>

      <div className="Page-content">{props.children}</div>
    </div>
  );
};

export default Page;
