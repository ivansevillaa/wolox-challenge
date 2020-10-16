import React from 'react';
import Header from '../../components/Header/index';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => (
  <>
    <Header />
    <main className="not-found container">
      <h3>404</h3>
      <p>La página que estas buscando no existe.</p>
      <Link to="/">Ir a página principal.</Link>
    </main>
  </>
);

export default NotFound;
