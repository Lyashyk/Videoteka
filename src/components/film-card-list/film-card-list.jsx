import React from 'react';

import FilmCardContainer from '../../containers/film-card-container';

import './film-card-list.css';

const FilmCardList = ({ list, ...rest }) => {
  return (
    <ul className="FilmCardList">
      {list.map(id => {
        return (
          <li key={id} className="FilmCardList-item">
            <FilmCardContainer id={id} {...rest} />
          </li>
        );
      })}
    </ul>
  );
};

export default FilmCardList;
