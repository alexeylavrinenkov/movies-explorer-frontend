import './MoviesCardList.css';
import MoviesCard from './../MoviesCard/MoviesCard';

const MoviesCardList = ({ 
  savedMovies,
  foundMovies, 
  onUnsaveMovie 
}) => {
  const handleCloseButtonClick = () => {
    onUnsaveMovie();
  };

  return (
    <section className='movies-card-list section' aria-label="Сохраненные фильмы">
      <ul className='movies-card-list__list list'>
        {foundMovies.map((movie) => {
          return (<MoviesCard
            movie={movie}
            key={movie.movieId}
            savedMovies={savedMovies}
            onCloseButtonClick={handleCloseButtonClick}
          />);
        })}
      </ul>
    </section>
  );
};

export default MoviesCardList;
