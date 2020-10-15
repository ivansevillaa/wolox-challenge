const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateLoginForm = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = 'Introduzca su email';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Formato de email no válido';
  }

  if (!values.password) {
    errors.password = 'Introduzca su contraseña';
  } else if (values.password.length < 8) {
    errors.password = 'La contraseña debe tener minimo 8 caracteres';
  }

  return errors;
};
