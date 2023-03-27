import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Footer from './../Footer/Footer';
import Main from './../Main/Main';
import Movies from './../Movies/Movies';
import SavedMovies from './../SavedMovies/SavedMovies';
import Profile from './../Profile/Profile';
import Login from './../Login/Login';
import Register from './../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import { LoggedInContext } from './../../contexts/LoggedInContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from './../ProtectedRoute/ProtectedRoute';
import mainApi from '../../utils/MainApi';
import Popup from '../Popup/Popup';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [savedMovies, setSavedMovies] = useState(null);
  const [popupTitle, setPopupTitle] = useState('');
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const navigate = useNavigate();

  const openPopup = (popupText) => {
    setPopupTitle(popupText);
    setIsOpenPopup(true);
  };

  const closePopup = () => {
    setIsOpenPopup(false);
    setPopupTitle('');
  };

  const handleLogin = ({ token }) => {
    localStorage.setItem('token', token);
    handleCheckToken();
    openPopup('Вы успешно вошли в свой аккаунт!');
    navigate('/movies');
  };

  const handleLogout = () => {
    setCurrentUser({});
    setLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.removeItem('searchText');
    localStorage.removeItem('areShortiesSeleted');
    localStorage.removeItem('foundMovies');
    navigate('/');
  };

  const handleCheckToken = () => {
    const token = localStorage.getItem('token');

    mainApi.checkToken(token)
      .then((userData) => {
        if (userData) {
          setCurrentUser(userData);
          setLoggedIn(true);
          navigate('/movies');
        }
      })
      .catch((err) => {
        localStorage.removeItem('token');
        localStorage.removeItem('searchText');
        localStorage.removeItem('areShortMoviesSelected');
        localStorage.removeItem('foundMovies');
        setCurrentUser({});
        console.error(err);
      });
  };

  const handleUpdateUser = (userInfo) => {
    setCurrentUser(userInfo);
    openPopup('Вы успешно обновили профиль!');
  };

  const handleGetSavedMovies = () => {
    mainApi.getSavedMovies()
      .then((movies) => {
        if (movies) {
          setSavedMovies(savedMovies);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSaveMovie = (movieData) => {
    mainApi.saveMovie(movieData)
      .then((savedMovie) => {
        if (savedMovie && savedMovies.length >= 1) {
          setSavedMovies([...savedMovies, savedMovie]);
        } else if (savedMovie) {
          setSavedMovies([savedMovie]);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleUnsaveMovie = (movieId) => {
    mainApi.unsaveMovie(movieId)
      .then(() => {
        setSavedMovies(savedMovies.filter((movie) => {
          return movie._id !== movieId;
        }));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    handleCheckToken();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      handleGetSavedMovies();
    }
  });

  useEffect(() => {
    if (isOpenPopup) {
      const handleEscKeydown = (evt) => {
        if (evt.key === 'Escape') {
          closePopup();
        }
      };

      document.addEventListener('keydown', handleEscKeydown);

      return () => {
        document.removeEventListener('keydown', handleEscKeydown);
      }
    }
  }, [isOpenPopup]);

  return (
    <LoggedInContext.Provider value={loggedIn}>
    <CurrentUserContext.Provider value={currentUser}>
      <div className='content'>
        <Header />
        <Routes>
          <Route
            exact path="/movies"
            element={
              <ProtectedRoute>
                <Movies
                  onSaveMovie={handleSaveMovie}
                  onUnsaveMovie={handleUnsaveMovie}
                />
              </ProtectedRoute>
            }
          />
          <Route
            exact path="/saved-movies"
            element={
              <ProtectedRoute>
                <SavedMovies
                  savedMovies={savedMovies}
                  onUnsaveMovie={handleUnsaveMovie}
                />
              </ProtectedRoute>
            }
          />
          <Route
            exact path="/profile"
            element={
              <ProtectedRoute>
                <Profile
                  onUpdateUser={handleUpdateUser}
                  onLogout={handleLogout}
                />
              </ProtectedRoute>
            }
          />

          <Route
            exact path="/"
            element={<Main />}
          />
          <Route
            exact path="/signin"
            element={<Login onLogin={handleLogin} />}
          />
          <Route
            exact path="/signup"
            element={<Register onLogin={handleLogin} />}
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />

        <Popup text={popupTitle} isOpen={isOpenPopup} onClose={closePopup} />
      </div>
    </CurrentUserContext.Provider>
    </LoggedInContext.Provider>
  );
};

export default App;
