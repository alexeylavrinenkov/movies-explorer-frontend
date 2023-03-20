import React from 'react';
import './Login.css';
import Auth from './../Auth/Auth';
import EmailAuthInput from './../Auth/EmailAuthInput/EmailAuthInput';
import PasswordAuthInput from './../Auth/PasswordAuthInput/PasswordAuthInput';

const Login = () => {
  return (
    <Auth
      title='Рады видеть!'
      submitButtonText='Войти'
      questionText='Ещё не зарегистрированы?'
      linkRoute='/signup'
      linkText='Регистрация'
    >
      <EmailAuthInput />
      <PasswordAuthInput />
    </Auth>
  );
};

export default Login;
