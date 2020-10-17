import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthDispatch } from '../../context/Auth';
import { useForm } from '../../hooks/useForm';
import { validateLoginForm } from '../../utils/validateLoginForm';
import { login } from '../../utils/serviceCall';
import Input from '../Input';
import Spinner from '../Spinner';
import './LoginForm.css';

const LoginForm = () => {
  const authDispatch = useAuthDispatch();
  const history = useHistory();
  const { values, errors, handleChange, handleSubmit } = useForm(
    handleLogin,
    validateLoginForm
  );
  const [keepConnected, setKeepConnected] = useState(false);
  const [loadingFetch, setLoadingFetch] = useState(false);
  const [errorFetch, setErrorFetch] = useState('');
  const [credentialError, setCredentialError] = useState();

  async function handleLogin() {
    setErrorFetch('');
    setLoadingFetch(true);

    try {
      const response = await login(values);
      const result = await response.json();

      if (result.token) {
        authDispatch({ type: 'LOGIN', payload: { token: result.token } });
        if (keepConnected) localStorage.setItem('token', result.token);
        history.replace('/tech-list');

        setErrorFetch('');
        setCredentialError('Usuario o contraseña no válidos.');
        setLoadingFetch(false);
      }
    } catch (err) {
      setLoadingFetch(false);
      setErrorFetch(
        'Algo ha salido mal, pero no fue tu culpa. Intentalo nuevamente más tarde.'
      );
      throw new Error(err);
    }
  }

  if (loadingFetch) {
    return <Spinner />;
  }

  if (errorFetch) {
    return <p>{errorFetch}</p>;
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <Input
        type="text"
        id="email"
        name="email"
        label="Email"
        onChange={handleChange}
        value={values.email || ''}
        error={errors.email}
      />
      <Input
        type="password"
        id="password"
        name="password"
        label="Contraseña"
        onChange={handleChange}
        value={values.password || ''}
        error={errors.password}
      />
      <input type="submit" value="Login" />
      <p className="error-message">{credentialError && credentialError}</p>
      <div className="input-check-container">
        <input
          type="checkbox"
          id="keepConnected"
          name="keepConnected"
          checked={keepConnected}
          onChange={() => setKeepConnected(!keepConnected)}
        />
        <label htmlFor="keepConnected">
          <span>Mantenerse conectado</span>
        </label>
      </div>
    </form>
  );
};

export default LoginForm;
