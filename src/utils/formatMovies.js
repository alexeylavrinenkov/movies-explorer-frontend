import isURL from 'validator/lib/isURL';
import { MAIN_BASE_URL } from './constants';

const formatMovies = (movie) => {
  return {
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    image: MAIN_BASE_URL + '/' + movie.image.url,
    trailerLink: isURL(movie.trailerLink)
      ? movie.trailerLink
      : MAIN_BASE_URL + '/' + movie.image.url,
    thumbnail: MAIN_BASE_URL + '/' + movie.image.formats.thumbnail.url,
    movieId: movie.id,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
  };
};

export default formatMovies;
