import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon/index';
import Navbar from '../Navbar/index';
import './Header.css';

const Header = () => (
  <header className="header container">
    <Link to="/">
      <Icon icon="iconWoloxFullColor" width={175} />
    </Link>
    <Navbar />
  </header>
);

export default Header;
