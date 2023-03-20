import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  const handleSaveButtonClick = () => {
    setIsEditing(false);
  };

  return (
    <main className='profile section'>
      <div className='profile__container'>
        <div className='profile__top'>
          <h1 className='profile__title'>{`Привет, Виталий!`}</h1>
          <form name='profile' className='profile__form'>
            <label className='profile__input-container'>
              <span className='profile__input-label'>Имя</span>
              <input className='profile__input' type='text' name='name' placeholder='Введите имя' minLength='2' maxLength='30' required />
            </label>
            <span className='profile__input-error'>Ошибка</span>
            <label className='profile__input-container'>
              <span className='profile__input-label'>E-mail</span>
              <input className='profile__input profile__input_type_email' type='email' name='email' placeholder='Введите почту' required />
            </label>
            <span className='profile__input-error'>Ошибка</span>
          </form>
        </div>
        <div className='profile__bottom'>
          {!isEditing ? (<>
            <button type='button' onClick={handleEditButtonClick} className='profile__button profile__edit-button link'>Редактировать</button>
            <button type='button' className='profile__button profile__sign-out-button link'>Выйти из аккаунта</button>
          </>) : (<>
            <span className='profile__common-error'>При обновлении профиля произошла ошибка.</span>
            <button type='submit' onClick={handleSaveButtonClick} className='profile__button profile__save-button profile__save-button_inactive' disabled>Сохранить</button>
          </>)}
        </div>
      </div>
    </main>
  );
};

export default Profile;
