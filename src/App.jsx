import React from 'react';
import './App.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Card from '../components/Card';

function App() {
  // <Hero />
  return (
    <div className="Container">
      <Header />
      <Card />
    </div>
  );
}

export default App;
