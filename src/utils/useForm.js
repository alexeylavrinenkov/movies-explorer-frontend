import { useState } from 'react';
import isEmail from 'validator/lib/isEmail';

const validateEmail = (value) => {
  const ERROR_MSG = 'Неверный формат электронной почты.';
  return isEmail(value) ? '' : ERROR_MSG;
}

const useForm = (initialValues = {}, initialIsValid = false) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(initialIsValid);

  const handleChange = (evt) => {
    const input = evt.target;
    const name = input.name;
    const value = input.type === 'checkbox' ? input.checked : input.value;

    switch (input.type) {
      case 'email':
        const errorMessage = validateEmail(value);
        setErrors((errors) => ({ ...errors, [name]: errorMessage }));
        input.setCustomValidity(errorMessage);
        break;
      default:
        setErrors((errors) => ({ ...errors, [name]: input.validationMessage }));
    }
    setValues((values) => ({ ...values, [name]: value }));
    setIsValid(input.closest('form').checkValidity());
  }

  return [values, errors, isValid, handleChange];
};

export default useForm;
