import { MOVIES_API_BASE_URL } from './constants';

class MoviesApi {
  constructor({ baseUrl }) {
    this._url = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._url}/beatfilm-movies`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then((res) => {
        return this._checkResponse(res);
      });
  }
}

const moviesApi = new MoviesApi({ 
  baseUrl: MOVIES_API_BASE_URL
});

export default moviesApi;