import React from 'react';
import './AuthInput.css';

const AuthInput = ({
  labelText,
  ...inputAttributes
}) => {
  return (
    <label className='auth__input-container'>
      <span className='auth__input-label'>{labelText}</span>
      <input className='auth__input' {...inputAttributes} />
      <span className='auth__input-error auth__input-error_active'>Ошибка</span>
    </label>
  );
};

export default AuthInput;
