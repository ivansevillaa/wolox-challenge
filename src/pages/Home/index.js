import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthState } from '../../context/Auth';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Benefits from '../../components/Benefits';
import Benefit from '../../components/Benefit';
import Footer from '../../components/Footer';
import './Home.css';
import { benefitsData } from '../../utils/benefitsData';

const Home = () => {
  const history = useHistory();
  const { isAuthenticated } = useAuthState();

  if (history.action === 'POP' && isAuthenticated) {
    history.push('/tech-list');
  }

  return (
    <>
      <Header withNavbar />
      <main className="home__main-content fadeInUp" id="begin">
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
};

export default Home;
