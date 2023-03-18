import React from 'react';
import { movieData } from '../../../utils/constants';
import './MoviesCardList.css';
import MoviesCard from './../MoviesCard/MoviesCard';

const MoviesCardList = () => {
  return (
    <section className='movies-card-list section' aria-label="Сохраненные фильмы">
      <p className='movies-card-list__not-found'>Ничего не найдено</p>
      <ul className='movies-card-list__list list'>
        {movieData.map((movie, index) => {
          return (<MoviesCard key={index} {...movie} />);
        })}
      </ul>
    </section>
  );
};

export default MoviesCardList;
