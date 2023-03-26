import React from 'react';
import './AuthInput.css';

const AuthInput = ({
  labelText,
  error,
  isLoading,
  ...inputAttributes
}) => {
  return (
    <label className='auth__input-container'>
      <span className='auth__input-label'>{labelText}</span>
      <input         
        className={`auth__input ${error ? 'auth__input_incorrect' : ''}`}
        disabled={isLoading}
        {...inputAttributes} 
      />
      <span className='auth__input-error'>{error}</span>
    </label>
  );
};

export default AuthInput;
