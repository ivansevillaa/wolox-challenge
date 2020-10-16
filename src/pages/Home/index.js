import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Benefits from '../../components/Benefits';
import Benefit from '../../components/Benefit';
import Footer from '../../components/Footer';
import './Home.css';
import { benefitsData } from '../../utils/benefitsData';

const Home = () => (
  <>
    <Header withNavbar />
    <main className="home__main-content" id="begin">
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
    <Footer />
  </>
);

export default Home;
