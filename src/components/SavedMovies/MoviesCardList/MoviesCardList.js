import './MoviesCardList.css';
import MoviesCard from './../MoviesCard/MoviesCard';

const MoviesCardList = ({ 
  movies,
  onUnsaveMovie, 
}) => {
  return (
    <section className='movies-card-list section' aria-label="Сохраненные фильмы">
      <ul className='movies-card-list__list list'>
        {movies.map((movie) => {
          return (<MoviesCard
            movie={movie}
            key={movie.movieId}
            onUnsaveMovie={onUnsaveMovie}
          />);
        })}
      </ul>
    </section>
  );
};

export default MoviesCardList;
