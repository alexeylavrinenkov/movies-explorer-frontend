import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <section className='search section' aria-label="Поиск">
      <div className='search_input-container'>
        <form name='search' className='search_form'>
          <button type='submit' className='search__magnifier link' />
          <input
            type='text'
            name='search'
            placeholder='Фильм'
            className='search__input'
            required
          />
          <button type='submit' className='search__button link' />
        </form>
      </div>
      <label className='search__sort link'>
        <input
          type='checkbox'
          name='short-films'
          id='short-films'
          value='short-films'
          className='search__checkbox link'
        />
        <span className='search__custom-checkbox'></span>
        <span htmlFor='short-films' className='search__checkbox-text'>Короткометражки</span>
      </label>
    </section>
  );
};

export default SearchForm;
