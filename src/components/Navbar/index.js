import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../Button/index';
import { useAuthState, useAuthDispatch } from '../../context/Auth';
import './Navbar.css';

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
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/">Inicio</Link>
        </li>
        <li className="navbar__item">
          <Link to="/">Beneficios</Link>
        </li>
        <li className="navbar__item">
          {isAuthenticated ? (
            <Button
              variant="outline"
              color="white"
              disableShadow
              onClick={() => logout()}
            >
              Logout
            </Button>
          ) : (
            <Link to="/login">
              <Button variant="outline" color="white" disableShadow>
                Login
              </Button>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
