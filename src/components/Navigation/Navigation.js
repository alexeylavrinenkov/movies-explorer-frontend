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

  const handleBurgerButtonClick = () => {
    setIsBurgerMenuOpen(true);
  };

  const handleCloseButtonClick = () => {
    setIsBurgerMenuOpen(false);
  };

  return (
    <nav className='menu'>
      {loggedIn
        ? ( <> <button
          type='button'
          onClick={handleBurgerButtonClick}
          className='menu__burger-button link'/> < div className = {
          `menu__container ${isBurgerMenuOpen && 'menu__container_opened'}`
        } > <ul className='menu__links list'>
          <button
            type='button'
            onClick={handleCloseButtonClick}
            className='menu__close-button link'/>
          <div className='menu__page-links'>
            <li className='menu__links-item menu__page-link menu__links-item_type_burger'>
              <Link
                className={`link menu__link ${pathname === '/' && 'menu__links-item_active'}`}
                to='/'>
                Главная
              </Link>
            </li>
            <li className='menu__links-item menu__page-link'>
              <Link
                className={`link menu__link ${pathname === '/movies' && 'menu__links-item_active'}`}
                to='/movies'>
                Фильмы
              </Link>
            </li>
            <li className='menu__links-item menu__page-link'>
              <Link
                className={`link menu__link ${pathname === '/saved-movies' && 'menu__links-item_active'}`}
                to='/saved-movies'>
                Сохранённые фильмы
              </Link>
            </li>
          </div>
          <li className='menu__links-item'>
            <Link className='menu__account-block' to='/profile'>
              <p
                className={`menu__account-text ${pathname === '/profile' && 'menu__links-item_active'}`}>Аккаунт</p>
              <div className='image menu__account-image'/>
            </Link>
          </li>
        </ul> </div>
        </>)
        : (
          <ul className='list menu__unauth-links'>
            <li className='menu__unauth-links-item'>
              <Link className='link' to='/signup'>
                Регистрация
              </Link>
            </li>
            <li className='menu__unauth-links-item'>
              <Link className='link menu__unauth-links-item_type_signin' to='/signin'>
                Войти
              </Link>
            </li>
          </ul>
        )}
    </nav>
  );
};

export default Navigation;
