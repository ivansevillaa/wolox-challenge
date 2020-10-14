import React from 'react';
import Picture from '../Picture/index';
import './Hero.css';
import HeroImage from '../../assets/Img Hero/Ic_ilustra_Hero.png';
import HeroImage2x from '../../assets/Img Hero/Ic_ilustra_Hero@2x.png';
import HeroImage3x from '../../assets/Img Hero/Ic_ilustra_Hero@3x.png';

const Hero = () => (
  <section className="hero container">
    <h1 className="hero__title">
      Bienvenido a tu{' '}
      <span>
        <strong className="hero__title--bold">entrevista técnica</strong> en{' '}
      </span>
      <span>
        <strong className="hero__title--bold hero__title--green">wolox</strong>
      </span>
    </h1>
    <Picture
      src={HeroImage}
      srcset={`${HeroImage2x} 2x, ${HeroImage3x} 3x`}
      alt="Hero image"
      flip
    />
  </section>
);

export default Hero;
