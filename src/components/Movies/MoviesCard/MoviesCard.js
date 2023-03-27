import React, { useState } from 'react';
import './MoviesCard.css';
import formatMovieDuration from '../../../utils/formatMovieDuration';

const MoviesCard = ({ movie, savedMovies, onSaveButtonClick }) => {
  const [isLoading, setIsLoading] = useState(false);
  const isSaved = savedMovies ? savedMovies.some((savedMovie) => savedMovie.movieId === movie.movieId) : false;

  async function handleSaveButtonClick() {
    setIsLoading(true);

    await onSaveButtonClick(movie);

    setIsLoading(false);
  }

  return (
    <li className='movies-card'>
      <a
        href={movie.trailerLink}
        rel='noreferrer'
        target='_blank'
        className='movies-card__link link'
      >
          <img src={movie.image} alt={movie.nameRU} className='movies-card__img img'/>
      </a>
      <div className='movies-card__container'>
        <div className='movies-card__title-container'>
          <h3 className='movies-card__title'>{movie.nameRU}</h3>
          <button type='button' className={`movies-card__like-button link ${isSaved ? 'movies-card__like-button_active' : ''}`} onClick={handleSaveButtonClick} disabled={isLoading} />
        </div>
        <p className='movies-card__duration'>{formatMovieDuration(movie.duration)}</p>
      </div>
    </li>
  );
};

export default MoviesCard;
