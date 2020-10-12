import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuthState, useAuthDispatch } from '../../context/Auth';

const Navbar = () => {
  const { isAuthenticated } = useAuthState();
  const authDispatch = useAuthDispatch();
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('token');
    authDispatch({ type: 'LOGOUT' });
    history.push('/');
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home page</Link>
        </li>
        <li>
          <Link to="/login">Login page</Link>
        </li>
        <li>
          <Link to="/tech-list">Tech list page</Link>
        </li>
        {isAuthenticated ? (
          <button onClick={() => logout()}>Sign out</button>
        ) : (
          <Link to="/login">Login page</Link>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
