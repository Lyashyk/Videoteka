import React from 'react';

import Logo from '../logo/logo';
import ButtonIsOpenContainer from '../../containers/button-is-open-container';
import InputSearchContainer from '../../containers/input-search-container';

import './header.css';

const Header = () => {
  return (
    <header className="Header">
      <div className="Header-logoCol">
        <div className="Header-logo">
          <Logo />
        </div>
      </div>

      <div className="Header-actionCol">
        <div className="Header-searchInput">
          <InputSearchContainer />
        </div>

        <div className="Header-addMovieButton">
          <ButtonIsOpenContainer title="Add new movie" />
        </div>
      </div>
    </header>
  );
};

export default Header;
