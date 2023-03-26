const searchMovies = (movies, searchText, areShortFilmsSelected) => {
  let foundMovies = movies;

  if (areShortFilmsSelected) {
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
