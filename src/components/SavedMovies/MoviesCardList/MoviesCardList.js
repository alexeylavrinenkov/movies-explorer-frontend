import React, { useEffect, useRef, useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from './../MoviesCard/MoviesCard';
import { NUMBER_OF_SHOWN_MOVIES_BY_COLUMNS } from '../../../utils/constants';

const MoviesCardList = ({ 
  foundMovies, 
  savedMovies, 
  onUnsaveMovie 
}) => {
  const [shownMovies, setShownMovies] = useState([]);
  const moviesCardListElement = useRef();

  const handleCloseButtonClick = () => {
    onUnsaveMovie();
  };

  useEffect(() => {
    if (foundMovies.length) {
      const numberOfColumns = window.getComputedStyle(moviesCardListElement.current).getPropertyValue('grid-template-columns').split(' ').length;

      setShownMovies(foundMovies.slice(0, NUMBER_OF_SHOWN_MOVIES_BY_COLUMNS[numberOfColumns].INITIAL));
    }
  }, [foundMovies]);

  return (
    <section className='movies-card-list section' aria-label="Сохраненные фильмы">
      <ul className='movies-card-list__list list' ref={moviesCardListElement}>
        {shownMovies.map((movie) => {
          return (<MoviesCard
            movie={movie}
            key={movie.movieId}
            onCloseButtonClick={handleCloseButtonClick}
          />);
        })}
      </ul>
    </section>
  );
};

export default MoviesCardList;
