import React from 'react';
import './Card.css';
import starIcon from '../src/assets/star.png';
import cardPhoto from '../src/assets/katie-zaferes.png';

const Card = () => {
  return (
    <div className="Card__container">
      <div>
        <img className="Card__photo" src={cardPhoto} />
      </div>
      <div className="Card__rating-container">
        <img className="Card__cardPhoto" src={starIcon} />
        <span className="Card__font Card__font-black">5.0</span>
        <span className="Card__font Card__font-grey">(6)</span>
        <span className="Card__font Card__font-grey">• USA</span>
      </div>
      <p className="Card__font Card__rating-black">
        Life lessons with Katie Zaferes
      </p>
      <div className="Card__font Card__font-black Card__price-container">
        <p className="Card__bold">From $136</p>
        <p>/ person</p>
      </div>
    </div>
  );
};

export default Card;
