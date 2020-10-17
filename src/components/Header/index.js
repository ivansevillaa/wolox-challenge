import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from '../Icon/index';
import Navbar from '../Navbar/index';
import './Header.css';

const Header = ({ withNavbar }) => (
  <header className="header container fadeInDown">
    <Link to="/">
      <Icon icon="iconWoloxFullColor" width={175} />
    </Link>
    {withNavbar && <Navbar />}
  </header>
);

Header.propTypes = {
  withNavbar: PropTypes.bool,
};

export default Header;
