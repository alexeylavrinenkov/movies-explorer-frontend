import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

const SearchResults = ({
  isRequestError,
  isLoading,
  isNothingFind,
  foundMovies,
  savedMovies,
  onSaveButtonClick
}) => {
  return (isRequestError ? (
    <p className='movies__error'>
      Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз
    </p>
  ) : (isLoading ? (
    <Preloader />
  ) : foundMovies.length === 0 && isNothingFind ? (
    <p className='movies__not-found'>Ничего не найдено</p>
  ) : (
    <MoviesCardList
      foundMovies={foundMovies}
      savedMovies={savedMovies}
      onSaveButtonClick={onSaveButtonClick}
    />
  )))
};

export default SearchResults;
