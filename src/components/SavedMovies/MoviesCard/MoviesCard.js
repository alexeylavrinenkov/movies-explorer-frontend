import React from 'react';
import './MoviesCard.css';
import img from '../../../images/33-words-about-design.jpg';

const MoviesCard = ({title, duration}) => {
  return (
    <li className='movies-card link'>
      <a
        href="/movies"
        rel="noreferrer"
        target="_blank"
        className='movies-card__link link'><img src={img} alt={title} className='movies-card__img img'/></a>
      <div className='movies-card__container'>
        <div className='movies-card__title-container'>
          <h3 className='movies-card__title'>{title}</h3>
          <button type='button' className='movies-card__close-button link'/>
        </div>
        <p className='movies-card__duration'>{duration}</p>
      </div>
    </li>
  );
};

export default MoviesCard;
