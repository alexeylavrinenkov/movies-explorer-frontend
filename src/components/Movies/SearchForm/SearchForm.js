import React, { useEffect, useState } from 'react';
import useForm from '../../../utils/useForm';
import './SearchForm.css';

const SearchForm = ({ 
  onSubmit,
  onCheckboxChange,
  isLoading,
  defaultSearchText,
  defaultAreShortMoviesSelected,
}) => {
  const defaultValues = {
    searchText: defaultSearchText,
    areShortMoviesSelected: defaultAreShortMoviesSelected,
  };

  const [errorText, setErrorText] = useState('');
  
  const [values, errors, isValid, handleChange] = useForm(
    defaultValues,
    !!defaultSearchText,
  );
  
  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!isValid) {
      setErrorText('Нужно ввести ключевое слово');
      return;
    }

    onSubmit(values);
  }

  useEffect(() => {
    if (values.areShortMoviesSelected !== defaultAreShortMoviesSelected) {
      onCheckboxChange(values.areShortMoviesSelected);
    }
  }, [values.areShortMoviesSelected, onCheckboxChange, defaultAreShortMoviesSelected]);

  useEffect(() => {
    if (isValid) {
      setErrorText('');
    }
  }, [isValid]);

  return (
    <section className='search section' aria-label="Поиск">
      <form name='search' onSubmit={handleSubmit} className='search__form' noValidate>
        <div className='search__input-container'>
          <button 
            type='submit' 
            className={`search__magnifier ${isLoading ? '' : 'link'}`} 
            disabled={isLoading} 
          />
          <input
            type='text'
            name='searchText'
            placeholder='Фильм'
            className={`search__input ${errorText ? 'search__input_incorrect' : ''}`}
            value={values.searchText}
            onChange={handleChange}
            disabled={isLoading}
            required
          />
          <button 
            type='submit' 
            className={`search__button ${isLoading ? '' : 'link'}`} 
            disabled={isLoading} 
          />
        </div>
        <span className='search__input-error'>{errorText}</span>
        <label className='search__sort link'>
          <input
            type='checkbox'
            name='areShortMoviesSelected'
            id='short-films'
            className='search__checkbox'
            checked={values.areShortMoviesSelected}
            onChange={handleChange}
            disabled={isLoading}
          />
          <span className='search__custom-checkbox'></span>
          <span className='search__checkbox-text'>Короткометражки</span>
        </label>
      </form>
    </section>
  );
};

export default SearchForm;
