import React from 'react';
import './App.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Card from '../components/Card';
import data from '../data';

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        coverImg={item.coverImg}
        title={item.title}
        price={item.price}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        openSpots={item.openSpots}
      />
    );
  });
  return (
    <div className="Container">
      <Header />
      <Hero />
      <div className="Cards__container">{cards}</div>
    </div>
  );
}

export default App;
