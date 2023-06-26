import { useEffect, useState } from 'react';
import useForm from './useForm';

const useProfileForm = (initialValues) => {
  const [values, errors, isFormValid, handleChange] = useForm(initialValues);

  const [areSameValues, setAreSameValues] = useState(true);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (
      values.name === initialValues.name &&
      values.email === initialValues.email
    ) {
      setAreSameValues(true);
      return;
    }
    setAreSameValues(false);
  }, [values, initialValues]);

  useEffect(() => {
    setIsValid(!areSameValues && isFormValid);
  }, [areSameValues, isFormValid]);

  return {values, handleChange, errors, isValid};
}

export default useProfileForm;
