import { MAIN_BASE_URL } from "./constants";

class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _getHeaders() {
    const token = localStorage.getItem('token');

    return {
      'Authorization': `Bearer ${token}`,
      ...this._headers,
    };
  } 
  
  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })
      .then((res) => {
        return this._checkResponse(res);
      })
  };
  
  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then((res) => {
        return this._checkResponse(res);
      })
  };
  
  checkToken(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => {
        return this._checkResponse(res);
      })
  };

  getUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._getHeaders(),
    })
      .then((res) => {
        return this._checkResponse(res);
      })
  }

  updateUser(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: `${data.name}`,
        email: `${data.email}`
      })
    })
      .then((res) => {
        return this._checkResponse(res);
      })
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._getHeaders(),
    })
      .then((res) => {
        return this._checkResponse(res);
      })
  }

  saveMovie(movieData) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify(movieData)
    })
      .then((res) => {
        return this._checkResponse(res);
      })
  }

  unsaveMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._getHeaders(),
    })
      .then((res) => {
        return this._checkResponse(res);
      })
  }
};

const mainApi = new MainApi({
  baseUrl: MAIN_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default mainApi;
