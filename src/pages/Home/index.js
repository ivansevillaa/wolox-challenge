import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Benefits from '../../components/Benefits';
import Benefit from '../../components/Benefit';
import './Home.css';
import { benefitsData } from '../../utils/benefitsData';

const Home = () => (
  <>
    <Header />
    <main className="home__main-content">
      <Hero />
      <About />
      <Benefits>
        {benefitsData.map((benefit, index) => (
          <Benefit
            key={index}
            icon={benefit.icon}
            width={90}
            height={90}
            benefitName={benefit.benefitName}
          />
        ))}
      </Benefits>
    </main>
  </>
);

export default Home;
