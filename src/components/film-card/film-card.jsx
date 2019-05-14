import React from 'react';
import { Link } from 'react-router-dom';

import IconTrash from '../icons/iconTrash/icon-trash';

import './film-card.css';

const MOVIE_POSTER = '/assets/images/defaultImage.jpg';

const FilmCard = ({ name, id, onMovieDelete }) => {
  return (
    <div className="FilmCard">
      <div className="FilmCard-information">
        <div className="FilmCard-imageHolder">
          <img className="FilmCard-image" src={MOVIE_POSTER} alt={name} />
        </div>

        <h3 className="FilmCard-title">
          <Link className="FilmCard-link" to={`/movie/${id}`} title={name}>
            {name}
          </Link>
        </h3>

        <span className="FilmCard-separator" role="presentation" />
      </div>

      <div className="FilmCard-buttonHolder">
        <button className="FilmCard-button" onClick={onMovieDelete(id)}>
          <span className="FilmCard-buttonIcon">
            <IconTrash />
          </span>
        </button>
      </div>
    </div>
  );
};

export default FilmCard;
