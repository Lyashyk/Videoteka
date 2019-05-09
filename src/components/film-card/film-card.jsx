import React from 'react';

import './film-card.css';
import defaultImage from '../../../public/assets/images/defaultImage.jpg';

const FilmCard = props => {
  const { src, name } = props;

  const updatedScr = src || defaultImage;

  return (
    <div className="FilmCard">
      <div className="FilmCard-holderImage">
        <img className="FilmCard-image" src={`${updatedScr}`} alt="" />
      </div>
      <div className="FilmCard-name">{name}</div>
      <span className="FilmCard-separator" />
      <div className="FilmCard-button" />
    </div>
  );
};

export default FilmCard;
