import React from 'react';
import './Hero.css';
import photoGrid from '../src/assets/photo-grid.png';

const Hero = () => {
  return (
    <main>
      <div className="Hero__photoGrid">
        <img src={photoGrid} />
      </div>
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </main>
  );
};

export default Hero;
