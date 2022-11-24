import React from 'react';
import './Card.css';
import starIcon from '../src/assets/star.png';

const Card = (props) => {
  let isOnline;
  if (props.location === 'Online') {
    isOnline = true;
  } else {
    isOnline = false;
  }

  return (
    <div className="Card__container">
      <div className="Card__photo-container">
        {isOnline && (
          <div className="Card__photo-badge">
            {props.openSpots === 0 ? 'Sold Out' : 'ONLINE'}
          </div>
        )}
        <img className="Card__photo" src={`../src/assets/${props.coverImg}`} />
      </div>
      <div className="Card__rating-container">
        <img className="Card__cardPhoto" src={starIcon} />
        <span className="Card__font Card__font-black">{props.rating}</span>
        <span className="Card__font Card__font-grey">
          ({props.reviewCount})
        </span>
        <span className="Card__font Card__font-grey">• {props.location}</span>
      </div>
      <p className="Card__font Card__rating-black">{props.title}</p>
      <div className="Card__font Card__font-black Card__price-container">
        <p className="Card__bold">From ${props.price}</p>
        <p>/ person</p>
      </div>
    </div>
  );
};

export default Card;
