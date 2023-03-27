import React, { useEffect, useState } from 'react';
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';
import searchMovies from '../../utils/searchMovies';
import formatMovies from '../../utils/formatMovies';

const Movies = ({ 
  onSaveMovie, 
  onUnsaveMovie, 
  savedMovies,
}) => {
  const defaultSearchText = localStorage.getItem('searchText') || '';
  const defaultAreShortMoviesSelected = JSON.parse(localStorage.getItem('areShortMoviesSelected')) || false;
  const defaultFoundMovies = JSON.parse(localStorage.getItem('foundMovies')) || [];

  const [allMovies, setAllMovies] = useState(null);
  const [foundMovies, setFoundMovies] = useState(defaultFoundMovies);
  const [isLoading, setIsLoading] = useState(false);
  const [isRequestError, setIsRequestError] = useState(false);
  const [areShortMoviesSelected, setAreShortMoviesSelected] = useState(defaultAreShortMoviesSelected);
  const [searchText, setSearchText] = useState(defaultSearchText);

  const getMovies = () => {
    setIsLoading(true);
    setIsRequestError(false);

    moviesApi.getMovies()
      .then((movies) => {
        const formattedMovies = movies.map(formatMovies);

        setAllMovies(formattedMovies);
      })
      .catch((err) => {
        setIsRequestError(true);
        console.error(err);
      });

    setIsLoading(false);
  };

  const handleSaveButtonClick = (movie) => {
    let isSavedMovie = false;

    if (savedMovies) {
      isSavedMovie = savedMovies.some((savedMovie) => {
        return savedMovie.movieId === movie.movieId;
      });
    }

    console.log(isSavedMovie);

    if (isSavedMovie) {
      console.log("Фильм удален");
      const savedMovie = savedMovies.find((savedMovie) => savedMovie.movieId === movie.movieId);
      
      onUnsaveMovie(savedMovie._id);
    } else {
      console.log("Фильм сохранен");
      onSaveMovie(movie);
    }
  };
  
  const handleCheckboxChange = (value) => {
    setAreShortMoviesSelected(value);

    if (!allMovies) { 
      return getMovies();
    }  
  }

  const handleSubmit = ({ searchText, areShortMoviesSelected }) => {
    setSearchText(searchText);
    setAreShortMoviesSelected(areShortMoviesSelected);

    if (!allMovies) {
      return getMovies();
    }
  };

  useEffect(() => {
    localStorage.setItem('foundMovies', JSON.stringify(foundMovies));
    localStorage.setItem('searchText', searchText);
    localStorage.setItem('areShortMoviesSelected', areShortMoviesSelected);
  }, [foundMovies, searchText, areShortMoviesSelected]);

  useEffect(() => {
    if (allMovies) {
      const foundMovies = searchMovies(
        allMovies,
        searchText,
        areShortMoviesSelected,
      );

      setFoundMovies(foundMovies);
    }
  }, [allMovies, searchText, areShortMoviesSelected]);

  return (
    <main className='movies'>
      <SearchForm 
        onSubmit={handleSubmit}          
        onCheckboxChange={handleCheckboxChange}
        isLoading={isLoading}
        defaultSearchText={searchText}
        defaultAreShortMoviesSelected={areShortMoviesSelected} 
      />

      {searchText && (isLoading ? (
        <Preloader />
      ) : foundMovies.length === 0 ? (
        <p className='movies__not-found'>Ничего не найдено</p>
      ) : isRequestError ? (
        <p className='movies__error'>
          Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз
        </p>
      ) : (
        <MoviesCardList
          foundMovies={foundMovies}
          onSaveButtonClick={handleSaveButtonClick}
        />
      ))}
    </main>
  );
};

export default Movies;
