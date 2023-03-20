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
}) => {
  return (
    <main className='auth section'>
      <div className='auth__container'>
        <div className='auth__top'>
          <Link to='/' className='auth__logo-link link'>
            <img
              src={logo}
              alt='Логотип Movies Explorer'
              className='auth__logo image'
            />
          </Link>
          <h1 className='auth__title'>{title}</h1>
          <form name='auth' className='auth__form'>
            {children}
          </form>
        </div>
        <div className='auth__bottom'>
          <span className='auth__error-text auth__error-text_active'>Общая ошибка</span>
          <button
            type='submit'
            className='auth__submit-button link'
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
      </div>
    </main>
  );
};

export default Auth;
