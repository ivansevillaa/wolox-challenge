import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuthState } from '../../context/Auth';
import Nav from '../../components/Navbar/index';
import { LoginForm } from '../../components/Form/index';

const Login = () => {
  const { isAuthenticated } = useAuthState();

  if (isAuthenticated) {
    return <Redirect to="/tech-list" />;
  }

  return (
    <div>
      <Nav />
      <h3>Login</h3>
      <LoginForm />
    </div>
  );
};

export default Login;
