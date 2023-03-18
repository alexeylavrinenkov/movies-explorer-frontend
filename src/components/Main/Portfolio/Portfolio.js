import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className='portfolio section_type_main'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='list portfolio__links'>
        <li className='portfolio__links-item'>
          <a
            rel='noreferrer'
            target='_blank'
            href='https://github.com/alexeylavrinenkov/react-mesto-api-full'
            className='portfolio__link link'
          >
            <h3 className='portfolio__link-title'>
              Mesto — приложение для обмена фотографиями
            </h3>
            <div className='portfolio__arrow'>↗</div>
          </a>
        </li>
        <li className='portfolio__links-item'>
          <a
            rel='noreferrer'
            target='_blank'
            href='https://github.com/alexeylavrinenkov/russian-travel'
            className='portfolio__link link'
          >
            <h3 className='portfolio__link-title'>
              Russian Travel — сайт о путешествиях по России
            </h3>
            <div className='portfolio__arrow'>↗</div>
          </a>
        </li>
        <li className='portfolio__links-item'>
          <a
            rel='noreferrer'
            target='_blank'
            href='https://github.com/alexeylavrinenkov/how-to-learn'
            className='portfolio__link link'
          >
            <h3 className='portfolio__link-title'>
              How to Learn — одностраничный сайт про обучение
            </h3>
            <div className='portfolio__arrow'>↗</div>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;

