import React, { useEffect, useState } from 'react';
import './SavedMovies.css';
import SearchForm from './../Movies/SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Devider from './Devider/Devider';
import searchMovies from '../../utils/searchMovies';

const SavedMovies = ({ savedMovies, onUnsaveMovie }) => {
  const [foundMovies, setFoundMovies] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [areShortMoviesSelected, setAreShortMoviesSelected] = useState(false);

  const handleUnsaveButtonClick = (movie) => {
    const savedMovie = savedMovies.find((savedMovie) => {
      return movie.movieId === savedMovie.movieId;
    });

    return onUnsaveMovie(savedMovie);
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
  }, [searchText, areShortMoviesSelected, savedMovies]);

  return (
    <main className='saved-movies'>
      <SearchForm
        onSubmit={handleSubmit}
        onCheckboxChange={handleCheckboxChange}
        defaultSearchText={searchText}
        defaultAreShortMoviesSelected={areShortMoviesSelected}
      />
      {searchText && (foundMovies.length === 0 ? (
        <p className='movies__not-found'>Ничего не найдено</p>
      ) : (
        <MoviesCardList
          foundMovies={foundMovies}
          savedMovies={savedMovies}
          onSaveButtonClick={handleUnsaveButtonClick}
        />
      ))}
      <Devider />
    </main>
  );
};

export default SavedMovies;
