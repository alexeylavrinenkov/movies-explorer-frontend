import React from 'react';
import {Link} from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {
  return (
    <main className='not-found section'>
      <div className='not-found__title-container'>
        <p className='not-found__code'>404</p>
        <h3 className='not-found__title'>Страница не найдена</h3>
      </div>
      <Link className='link not-found__link' to='/'>Назад</Link>
    </main>
  );
};

export default PageNotFound;
