const HEADER_PATH_NAMES = ['/', '/movies', '/saved-movies', '/profile'];
const FOOTER_PATH_NAMES = ['/', '/movies', '/saved-movies'];

const MAIN_BASE_URL = 'https//:api.movies-explorer.site.nomoredomains.work';

const MOVIES_API_BASE_URL = 'https://api.nomoreparties.co';

const NUMBER_OF_SHOWN_MOVIES_BY_COLUMNS = {
  1: {
    INITIAL: 5,
    ADD: 2,
  },
  2: {
    INITIAL: 8,
    ADD: 2,
  },
  3: {
    INITIAL: 12,
    ADD: 3,
  }
};

const REQUEST_ERROR_TEXTS = {
  SIGNIN_INCORRECT_LOGIN_OR_PASSWORD: 'Вы ввели неправильный логин или пароль.',
  SIGNIN_TOKEN_NOT_TRANSFERED: 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.',
  SIGNIN_INCORRECT_TOKEN: 'При авторизации произошла ошибка. Переданный токен некорректен.',
  SIGNIN_ERROR: 'При авторизации произошла ошибка.',
  USER_ALREADY_EXISTS: 'Пользователь с таким email уже существует.',
  SIGNUP_ERROR: 'При регистрации пользователя произошла ошибка.',
  PROFILE_UPDATE_ERROR: 'При обновлении профиля произошла ошибка.',
  INTERNAL_SERVER_ERROR: 'На сервере произошла ошибка.',
};

export {
  HEADER_PATH_NAMES,
  FOOTER_PATH_NAMES,
  MAIN_BASE_URL,
  MOVIES_API_BASE_URL,
  NUMBER_OF_SHOWN_MOVIES_BY_COLUMNS,
  REQUEST_ERROR_TEXTS,
};
