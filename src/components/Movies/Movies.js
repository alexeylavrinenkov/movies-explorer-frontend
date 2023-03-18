import React from 'react';
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import More from './More/More';

const Movies = () => {
  return (
    <main className='movies content'>
      <SearchForm />
      <MoviesCardList />
      <More />
    </main>
  );
};

export default Movies;
