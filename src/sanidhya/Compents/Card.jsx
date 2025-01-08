// Card.js
import React from 'react';
import './Card.css';

function Card({ image, title, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;
