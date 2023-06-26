import React, { useEffect, useState } from 'react';
import './SavedMovies.css';
import SearchForm from './../Movies/SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Devider from './Devider/Devider';
import searchMovies from '../../utils/searchMovies';

const SavedMovies = ({ savedMovies, onUnsaveMovie }) => {
  const [searchText, setSearchText] = useState('');
  const [areShortMoviesSelected, setAreShortMoviesSelected] = useState(false);
  const [foundMovies, setFoundMovies] = useState(savedMovies);

  const handleUnsaveMovie = (movie) => {
    const savedMovie = savedMovies.find((savedMovie) => {
      return movie.movieId === savedMovie.movieId;
    });

    return onUnsaveMovie(savedMovie._id);
  };

  const handleCheckboxChange = (value) => {
    setAreShortMoviesSelected(value);
  };

  const handleSubmit = ({ searchText, areShortMoviesSelected }) => {
    setAreShortMoviesSelected(areShortMoviesSelected);
    setSearchText(searchText);
  };

  useEffect(() => {
    if (savedMovies) {
      const foundMovies = searchMovies(
        savedMovies,
        searchText,
        areShortMoviesSelected,
      );
      setFoundMovies(foundMovies);
    }
  }, [savedMovies, searchText, areShortMoviesSelected]);

  return (
    <main className='saved-movies'>
      <SearchForm
        onSubmit={handleSubmit}
        onCheckboxChange={handleCheckboxChange}
        defaultSearchText={searchText}
        defaultAreShortMoviesSelected={areShortMoviesSelected}
      />
      {searchText && foundMovies.length === 0 ? (
        <p className='movies__not-found'>Ничего не найдено</p>
      ) : (
        <MoviesCardList
          movies={foundMovies}
          onUnsaveMovie={handleUnsaveMovie}
        />
      ) || 
      (<MoviesCardList
        movies={savedMovies}
        onUnsaveMovie={handleUnsaveMovie}
      />
      )}
      <Devider />
    </main>
  );
};

export default SavedMovies;
