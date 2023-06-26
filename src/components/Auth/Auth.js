import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';
import logo from '../../images/logo.svg';

const Auth = ({
  children,
  title,
  submitButtonText,
  questionText,
  linkRoute,
  linkText,
  isValid,
  onSubmit,
  isLoading,
  requestError
}) => {
  return (
    <main className='auth section'>
      <form name='auth' onSubmit={onSubmit} className='auth__form' noValidate>
        <div className='auth__top'>
          <Link to='/' className='auth__logo-link link'>
            <img
              src={logo}
              alt='Логотип Movies Explorer'
              className='auth__logo image'
            />
          </Link>
          <h1 className='auth__title'>{title}</h1>
          <div className='auth__container'>
            {children}
          </div>
        </div>
        <div className='auth__bottom'>
          <span className='auth__error-text'>{requestError}</span>
          <button
            type='submit'
            className={`auth__submit-button ${!isValid || isLoading ? 'auth__submit-button_inactive' : 'link'}`}
            disabled={!isValid || isLoading}
          >
            {submitButtonText}
          </button>
          <div className='auth__link-container'>
            <p className='auth__question'>{questionText}</p>
            <Link to={linkRoute} className='link'>
              <p className='auth__link'>{linkText}</p>
            </Link>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Auth;
