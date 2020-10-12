import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useAuthDispatch } from '../../context/Auth';
import { useInput } from '../../hooks/useInput';

const LoginForm = () => {
  const email = useInput('');
  const password = useInput('');
  const [keepConnected, setKeepConnected] = useState(false);
  const authDispatch = useAuthDispatch();
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/' } };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestUrl =
      'http://private-8e8921-woloxfrontendinverview.apiary-mock.com/login';
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        email: email.value,
        password: password.value,
      },
    };
    const response = await fetch(requestUrl, requestOptions);
    const result = await response.json();
    if (keepConnected) {
      localStorage.setItem('token', result.token);
    }
    authDispatch({ type: 'LOGIN', payload: { token: result.token } });

    history.replace(from);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        <span>Enter your email address</span>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          required
          {...email}
        />
      </label>
      <label htmlFor="password">
        <span>Enter your password</span>
        <input
          type="password"
          id="password"
          name="password"
          autoComplete="password"
          required
          {...password}
        />
      </label>
      <label htmlFor="keepConnected">
        <span>Keep connected</span>
        <input
          type="checkbox"
          id="keepConnected"
          name="keepConnected"
          checked={keepConnected}
          onChange={() => setKeepConnected(!keepConnected)}
        />
      </label>
      <input type="submit" value="Log In" />
    </form>
  );
};

export default LoginForm;
