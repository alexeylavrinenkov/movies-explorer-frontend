import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from './../Navigation/Navigation';
import { Link, useLocation } from 'react-router-dom';
import {headerPathNames} from '../../utils/constants';

const Header = () => {
  const location = useLocation();

  return ( <> {
    headerPathNames.indexOf(location.pathname) !== -1 && (
      <header className={`header section ${location.pathname === '/' ? 'header_theme_main' : ''}`}>
        <Link className='link header__link' to='/'>
          <img className='image header__logo' src={logo} alt='Логотип Movies Explorer'/>
        </Link>
        <Navigation/>
      </header>
    )
  } </>
  );
};

export default Header;
