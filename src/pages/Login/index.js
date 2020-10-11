import React from 'react';
import { useLocation, useHistory, Redirect } from 'react-router-dom';
import { useAuthState, useAuthDispatch } from '../../context/Auth';
import Nav from '../../components/Navbar/index';

const Login = () => {
  const { isAuthenticated } = useAuthState();
  const authDispatch = useAuthDispatch();
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/' } };
  const login = () => {
    authDispatch({ type: 'LOGIN' });
    history.replace(from);
  };

  if (isAuthenticated) {
    return <Redirect to="/tech-list" />;
  }

  return (
    <div>
      <Nav />
      <h3>Login</h3>
      <button onClick={() => login()}>login</button>
    </div>
  );
};

export default Login;
