const searchMovies = (movies, searchText, areShortMoviesSelected) => {
  let foundMovies = movies;

  if (areShortMoviesSelected) {
    foundMovies = foundMovies.filter((movie) => {
      return movie.duration <= 40;
    });
  }

  foundMovies = foundMovies.filter((movie) =>
    movie.nameRU.toLowerCase().includes(searchText.toLowerCase()),
  );

  return foundMovies;
}

export default searchMovies;
