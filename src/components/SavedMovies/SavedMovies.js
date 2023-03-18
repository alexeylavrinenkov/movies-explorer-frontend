import React from 'react';
import './SavedMovies.css';
import SearchForm from './../Movies/SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Devider from './Devider/Devider';

const SavedMovies = () => {
  return (
    <main className='saved-movies content'>
      <SearchForm />
      <MoviesCardList />
      <Devider />
    </main>
  );
};

export default SavedMovies;
