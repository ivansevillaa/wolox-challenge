import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuthState } from '../../context/Auth';
import { LoginForm } from '../../components/Form/index';
import './Login.css';

const Login = () => {
  const { isAuthenticated } = useAuthState();

  if (isAuthenticated) {
    return <Redirect to="/tech-list" />;
  }

  return (
    <div className="login-page container">
      <main className="login-section">
        <h2 className="login__title">Login</h2>
        <LoginForm />
      </main>
    </div>
  );
};

export default Login;
