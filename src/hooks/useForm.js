import { useState, useEffect } from 'react';

export const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return { values, errors, handleChange, handleSubmit };
};

// export const useInput = (initialValue) => {
//   const [value, setValue] = useState(initialValue);

//   const onChange = (event) => setValue(event.target.value);

//   return { value, onChange };
// };
