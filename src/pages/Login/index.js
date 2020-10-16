import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuthState } from '../../context/Auth';
import { LoginForm } from '../../components/Form/index';
import Header from '../../components/Header/index';
import './Login.css';

const Login = () => {
  const { isAuthenticated } = useAuthState();

  if (isAuthenticated) {
    return <Redirect to="/tech-list" />;
  }

  return (
    <>
      <Header />
      <main className="login-section container">
        <div className="login">
          <h2 className="login__title">Login</h2>
          <LoginForm />
        </div>
      </main>
    </>
  );
};

export default Login;
