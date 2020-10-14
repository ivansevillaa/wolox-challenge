import React from 'react';
import Icon from '../Icon';
import Button from '../Button';
import './About.css';

const About = () => (
  <section className="about">
    <div className="about-data">
      <h2 className="about__title">
        <span className="about__title--green">350 +</span>{' '}
        <span className="about__title--blue">Woloxers</span>
      </h2>
      <div className="social-media-info">
        <Icon icon="iconTwitter" width={46} />
        <p className="social-media-info__text">@Wolox</p>
      </div>
      <a href="https://twitter.com/Wolox">
        <Button variant="outline" color="transparent" disableShadow size="lg">
          Siguenos
        </Button>
      </a>
    </div>
    <div className="about-slogan">
      <h2 className="about__title">
        Trabajamos para{' '}
        <strong className="about__title--bold">
          <span className="about__title--blue">convertir</span>{' '}
          <span className="about__title--green">ideas</span>
        </strong>{' '}
        en productos.
      </h2>
    </div>
  </section>
);

export default About;
