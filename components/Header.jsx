import React from 'react';
import './Header.css';
import airbnbLogo from '../src/assets/airbnb-logo.png';

const Header = () => {
  return (
    <header>
      <img className="Header__logo" src={airbnbLogo} />
    </header>
  );
};

export default Header;
