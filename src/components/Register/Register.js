import React, { useState } from 'react';
import './Register.css';
import Auth from './../Auth/Auth';
import NameAuthInput from '../Auth/NameAuthInput/NameAuthInput';
import EmailAuthInput from '../Auth/EmailAuthInput/EmailAuthInput';
import PasswordAuthInput from '../Auth/PasswordAuthInput/PasswordAuthInput';
import mainApi from '../../utils/MainApi';
import { REQUEST_ERROR_TEXTS } from '../../utils/constants';
import useForm from '../../utils/useForm';

const Register = ({ onLogin }) => {
  const [requestError, setRequestError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [values, errors, isValid, handleChange] = useForm();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setRequestError('');
    setIsLoading(true);

    mainApi.register(values)
      .then(() => {
        const { email, password } = values;

        return mainApi.login({ email, password })
          .then((token) => {
            console.log(token);
            if (token) {
              console.log(token);
              console.log(token.token);
              onLogin(token);
            }
          });
      })
      .catch((err) => {
        let message;

        console.log(err.message);
        console.log(err.message === '409');
        console.log(err.message === 409);

        if (err.message === '409') {
          message = REQUEST_ERROR_TEXTS.USER_ALREADY_EXISTS;
        }
        else if (err.message === '500') {
          message = REQUEST_ERROR_TEXTS.INTERNAL_SERVER_ERROR;
        }
        else {
          message = REQUEST_ERROR_TEXTS.SIGNUP_ERROR;
        }

        console.log(message);

        setRequestError(message);

        console.error(err);
      });

    setIsLoading(false);
  }

  return (
    <Auth
      title='Добро пожаловать!'
      submitButtonText='Зарегистрироваться'
      questionText='Уже зарегистрированы?'
      linkRoute='/signin'
      linkText='Войти'
      isValid={isValid}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      requestError={requestError}
    >
      <NameAuthInput
        onChange={handleChange}
        isLoading={isLoading}
        value={values.name || ''}
        error={errors.name}
      />
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

export default Register;
