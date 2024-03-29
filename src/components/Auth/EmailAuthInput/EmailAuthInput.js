import React from 'react';
import AuthInput from './../AuthInput/AuthInput';

const EmailAuthInput = ({ ...validationParams }) => {
  return (
    <AuthInput
      labelText='E-mail'
      type='email'
      name='email'
      placeholder='Введите почту'
      required
      {...validationParams}
    />
  );
};

export default EmailAuthInput;
