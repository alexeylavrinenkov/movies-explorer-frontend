import React from 'react';
import './Footer.css';
import {useLocation} from 'react-router-dom';

const Footer = () => {
  const pathNames = ['/', '/movies', '/saved-movies'];
  const location = useLocation();

  return ( <> {
    pathNames.indexOf(location.pathname) !== -1 && (
      <footer className='footer section'>
        <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div className='footer__copy-nav'>
          <p className='footer__copyright'>© {new Date().getFullYear()}</p>
          <nav>
            <ul className='list footer_links'>
              <li className="footer__links-item">
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://practicum.yandex.ru/'
                  className="link">Яндекс.Практикум</a>
              </li>
              <li className="footer__links-item">
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://github.com/alexeylavrinenkov/movies-explorer-frontend'
                  className="link">GitHub</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    )
  } </>
  );
};

export default Footer;
