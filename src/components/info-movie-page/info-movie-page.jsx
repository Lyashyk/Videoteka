import React from 'react';

import './info-movie-page.css';

const InfoMoviePage = props => {
  const { src, title, releaseYear, format, stars } = props;
  const defaultImage = '/assets/images/defaultImage.jpg';
  const updatedScr = src || defaultImage;

  return (
    <section className="InfoMoviePage">
      <div className="InfoMoviePage-content">
        <div className="InfoMoviePage-ImageColumn">
          <div className="InfoMoviePage-holderImage">
            <img className="FilmCard-image" src={updatedScr} alt="" />
          </div>
        </div>
        <div className="InfoMoviePage-InfoColumn">
          <div className="InfoMoviePage-name">Movie title: {title}</div>
          <div className="InfoMoviePage-releaseYear">
            Release year: {releaseYear}
          </div>
          <div className="InfoMoviePage-format">Format: {format}</div>
          <div className="InfoMoviePage-stars" />
          Stars: {stars}
        </div>
      </div>
    </section>
  );
};

export default InfoMoviePage;
