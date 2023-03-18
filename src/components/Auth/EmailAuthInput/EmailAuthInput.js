import React from 'react';
import AuthInput from './../AuthInput/AuthInput';

const EmailAuthInput = () => {
  return (
    <AuthInput
      labelText='E-mail'
      type='email'
      name='email'
      placeholder='Введите почту'
      required
    />
  );
};

export default EmailAuthInput;
