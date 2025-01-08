import React from 'react';

const CardList = ({ cards }) => {
  return (
    <div>
      {cards.map((card, index) => (
        <div key={index} className="card">
          <h3>{card.name}</h3>
          <p>Card Number: {card.id}</p>
          <p>Address: {card.address}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;
