import React from 'react';
import Icon from '../Icon/index';
import Navbar from '../Navbar/index';
import './Header.css';

const Header = () => (
  <header className="header container">
    <Icon icon="iconWoloxFullColor" width={175} />
    <Navbar />
  </header>
);

export default Header;
