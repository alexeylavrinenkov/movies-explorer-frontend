import React from 'react';
import AuthInput from '../AuthInput/AuthInput';

const NameAuthInput = ({ ...validationParams }) => {
  return (
    <AuthInput
      labelText='Имя'
      type='text'
      name='name'
      placeholder='Введите имя'
      minLength='2'
      maxLength='30'
      pattern='[A-Za-zА-Яа-яЁё\s-]+'
      required
      {...validationParams}
    />
  );
};

export default NameAuthInput;
