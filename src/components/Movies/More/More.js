import React from 'react';
import './More.css';

const More = () => {
  return (
    <section className='more section' aria-label="Ещё фильмы">
      <button
        type='button'
        className='more__button link'
      >
        Ещё
      </button>
    </section>
  );
};

export default More;
