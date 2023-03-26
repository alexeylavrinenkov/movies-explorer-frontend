import React from 'react';
import './More.css';

const More = ({ onMoreButtonClick }) => {
  const handleMoreButtonClick = () => {
    onMoreButtonClick();
  };

  return (
    <section className='more section' aria-label="Ещё фильмы">
      <button
        type='button'
        onClick={handleMoreButtonClick}
        className='more__button link'
      >
        Ещё
      </button>
    </section>
  );
};

export default More;
