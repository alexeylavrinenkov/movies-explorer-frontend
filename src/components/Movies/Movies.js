import React, { useEffect, useState } from 'react';
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import moviesApi from '../../utils/MoviesApi';
import searchMovies from '../../utils/searchMovies';
import formatMovies from '../../utils/formatMovies';
import SearchResults from './SearchResults/SearchResults';

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
    setIsRequestError(false);
    setIsLoading(true);

    moviesApi.getMovies()
      .then((movies) => {
        const formattedMovies = movies.map(formatMovies);

        setAllMovies(formattedMovies);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsRequestError(true);
        setIsLoading(false);
        console.error(err);
      });
  };

  const handleSaveButtonClick = (movie) => {
    let isSavedMovie = false;

    if (savedMovies) {
      isSavedMovie = savedMovies.some((savedMovie) => {
        return savedMovie.movieId === movie.movieId;
      });
    }

    if (isSavedMovie) {
      const savedMovie = savedMovies.find((savedMovie) => savedMovie.movieId === movie.movieId);
      
      onUnsaveMovie(savedMovie._id);
    } else {
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

      {searchText && (
        <SearchResults
          isRequestError={isRequestError}
          isLoading={isLoading}
          foundMovies={foundMovies}
          savedMovies={savedMovies}
          onSaveButtonClick={handleSaveButtonClick}
        />
      )}
    </main>
  );
};

export default Movies;
