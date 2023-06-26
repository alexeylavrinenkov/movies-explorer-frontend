import React, { useContext, useEffect, useState } from 'react';
import './Login.css';
import Auth from './../Auth/Auth';
import EmailAuthInput from './../Auth/EmailAuthInput/EmailAuthInput';
import PasswordAuthInput from './../Auth/PasswordAuthInput/PasswordAuthInput';
import mainApi from '../../utils/MainApi';
import { REQUEST_ERROR_TEXTS } from '../../utils/constants';
import useForm from '../../utils/useForm';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import { Navigate, useLocation } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const loggedIn = useContext(LoggedInContext);
  const location = useLocation();

  const [requestError, setRequestError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const [values, errors, isValid, handleChange] = useForm();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setRequestError('');
    setIsLoading(true);

    mainApi.login(values)
      .then(({ token }) => {
        if (token) {
          onLogin(token);
        }
      })
      .catch((err) => {
        let message;

        if (err.split(' ')[1] === '409') {
          message = REQUEST_ERROR_TEXTS.USER_ALREADY_EXISTS;
        }
        else if (err.split(' ')[1] === '500') {
          message = REQUEST_ERROR_TEXTS.INTERNAL_SERVER_ERROR;
        }
        else {
          message = REQUEST_ERROR_TEXTS.SIGNIN_ERROR;
        }

        setRequestError(message);
      });

    setIsLoading(false);
  };

  useEffect(() => {
    if (loggedIn && location.pathname === '/signin') {
      return <Navigate to='/movies' />;
    }
  }, [loggedIn]);

  return (
    <Auth
      title='Рады видеть!'
      submitButtonText='Войти'
      questionText='Ещё не зарегистрированы?'
      linkRoute='/signup'
      linkText='Регистрация'
      requestError={requestError}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      isValid={isValid}
    >
      <EmailAuthInput
        onChange={handleChange}
        isLoading={isLoading} 
        value={values.email || ''}
        error={errors.email}
      />
      <PasswordAuthInput 
        onChange={handleChange}
        isLoading={isLoading}      
        value={values.password || ''}
        error={errors.password}
      />
    </Auth>
  );
};

export default Login;
