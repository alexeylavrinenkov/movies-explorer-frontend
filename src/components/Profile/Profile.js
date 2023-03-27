import React, { useContext, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { REQUEST_ERROR_TEXTS } from '../../utils/constants';
import mainApi from '../../utils/MainApi';
import useProfileForm from '../../utils/useProfileForm';
import './Profile.css';

const Profile = ({ onUpdateUser, onLogout }) => {
  const currentUser = useContext(CurrentUserContext);
  
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [requestError, setRequestError] = useState('');
  
  const { values, errors, isValid, handleChange } = useProfileForm(currentUser);

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  const handleSaveButtonClick = () => {
    setIsEditing(false);
  };

  const handleSignOutButtonClick = () => {
    onLogout();
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setRequestError('');
    setIsLoading(true);

    mainApi.updateUser(values)
      .then((res) => {
        if (res) {
          handleSaveButtonClick();
          onUpdateUser(res.data);
        }
      })
      .catch((err) => {
        let message;

        if (err.split(' ')[1] === '409') {
          message = REQUEST_ERROR_TEXTS.USER_ALREADY_EXISTS;
        }
        else if (err.split(' ')[1] === '500') {
          message = REQUEST_ERROR_TEXTS.INTERNAL_SERVER_ERROR;
        }
        else {
          message = REQUEST_ERROR_TEXTS.PROFILE_UPDATE_ERROR;
        }

        setRequestError(message);
      });

    setIsLoading(false);
  };

  return (
    <main className='profile section'>
      <form name='profile' onSubmit={handleSubmit} className='profile__form' noValidate>
        <div className='profile__top'>
          <h1 className='profile__title'>{currentUser.name ? `Привет, ${currentUser.name}!` : 'Привет!'}</h1>
          <div className='profile__container'>
            <label className='profile__input-container'>
              <span className='profile__input-label'>Имя</span>
              <input 
                className={`profile__input ${errors.name ? 'profile__input_incorrect' : ''}`} 
                type='text' 
                name='name' 
                onChange={handleChange}
                placeholder='Введите имя' 
                minLength='2' 
                maxLength='30'
                value={values.name || ''}
                disabled={isLoading || !isEditing}
                required 
              />
              <span className='profile__input-error'>{errors.name}</span>
            </label>
            <label className='profile__input-container'>
              <span className='profile__input-label'>E-mail</span>
              <input 
                className={`profile__input profile__input_type_email ${errors.email ? 'profile__input_incorrect' : ''}`} 
                type='email' 
                name='email' 
                onChange={handleChange}
                placeholder='Введите почту' 
                value={values.email || ''}
                disabled={isLoading || !isEditing}
                required 
              />
            </label>
            <span className='profile__input-error'>{errors.email}</span>
          </div>
        </div>
        <div className='profile__bottom'>
          {!isEditing ? (<>
            <button type='button' onClick={handleEditButtonClick} className='profile__button profile__edit-button link'>Редактировать</button>
            <button type='button' onClick={handleSignOutButtonClick} className='profile__button profile__sign-out-button link'>Выйти из аккаунта</button>
          </>) : (<>
            <span className='profile__common-error'>{requestError}</span>
            <button 
              type='submit'
              className={`profile__button profile__save-button ${!isValid || isLoading ? 'profile__save-button_inactive' : 'link'}`} 
              disabled={!isValid || isLoading}
            >
              Сохранить
            </button>
          </>)}
        </div>
      </form>
    </main>
  );
};

export default Profile;
