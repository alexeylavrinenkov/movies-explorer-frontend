import React, {useContext, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import './Navigation.css';
import {LoggedInContext} from './../../contexts/LoggedInContext';

const Navigation = () => {
  const loggedIn = useContext(LoggedInContext);
  const [isBurgerMenuOpen,
    setIsBurgerMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  const openBurgerMenu = () => {
    setIsBurgerMenuOpen(true);
  }

  const closeBurgerMenu = () => {
    setIsBurgerMenuOpen(false);
  }

  const handleBurgerButtonClick = () => {
    openBurgerMenu();
  };

  const handleCloseButtonClick = () => {
    closeBurgerMenu();
  };

  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      closeBurgerMenu();
    }
  };

  const handleEscKeydown = (evt) => {
    if (evt.key === 'Escape') {
      closeBurgerMenu();
    }
  };

  React.useEffect(() => {
    if (isBurgerMenuOpen) {
      document.addEventListener('keydown', handleEscKeydown);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKeydown);
    };
  });

  return (
    <nav className='menu'>
      {loggedIn
        ? ( <> <button
          type='button'
          onClick={handleBurgerButtonClick}
          className='menu__burger-button link'/> 
        <div onClick = {
          handleOverlayClick
        }
        className = {
          `menu__container ${isBurgerMenuOpen
            ? 'menu__container_opened'
            : ''}`
        }> <div className='menu__links'>
          <button
            type='button'
            onClick={handleCloseButtonClick}
            className='menu__close-button link'/>
          <ul className='menu__page-links list'>
            <li className='menu__links-item menu__page-link menu__links-item_type_burger'>
              <Link
                className={`link menu__link ${pathname === '/'
                ? 'menu__link_active'
                : ''}`}
                to='/'>
                Главная
              </Link>
            </li>
            <li className='menu__links-item menu__page-link'>
              <Link
                className={`link menu__link ${pathname === '/movies'
                ? 'menu__link_active'
                : ''}`}
                to='/movies'>
                Фильмы
              </Link>
            </li>
            <li className='menu__links-item menu__page-link'>
              <Link
                className={`link menu__link ${pathname === '/saved-movies'
                ? 'menu__link_active'
                : ''}`}
                to='/saved-movies'>
                Сохранённые фильмы
              </Link>
            </li>
          </ul>
          <div className='menu__links-item'>
            <Link className='menu__account-block' to='/profile'>
              <p
                className={`menu__account-text ${pathname === '/profile'
                ? 'menu__account-text_active'
                : ''}`}>Аккаунт</p>
              <div className='image menu__account-image'/>
            </Link>
          </div>
        </div> </div>
        </>)
        : (
          <ul className='list menu__unauth-links'>
            <li className='menu__unauth-links-item'>
              <Link className='link' to='/signup'>
                Регистрация
              </Link>
            </li>
            <li className='menu__unauth-links-item'>
              <Link
                className='link menu__unauth-link menu__unauth-link_type_signin'
                to='/signin'>
                Войти
              </Link>
            </li>
          </ul>
        )}
    </nav>
  );
};

export default Navigation;
