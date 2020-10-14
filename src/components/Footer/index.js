import React from 'react';
import Button from '../Button';
import Icon from '../Icon';
import './Footer.css';

const Footer = () => (
  <footer className="footer container">
    <h2 className="footer__title">
      Gracias por{' '}
      <strong className="footer__title--bold">completar el ejercicio</strong>
    </h2>
    <h3 className="footer__call-to-action">
      Te invitamos a ver más información
    </h3>
    <a href="https://www.wolox.com.ar/" className="footer__link">
      <Button>Conocer más</Button>
    </a>
    <Icon icon="iconWolox" width={108} height={24} />
  </footer>
);

export default Footer;
