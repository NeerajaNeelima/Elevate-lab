import React from 'react';
import './card.css'; // Make sure the CSS file path is correct

const Card = ({ name, title, price, image }) => {
  return (
    <div className='card'>
      <div className="card-hover">
        <div className="card-hover__content">
          <h3 className="card-hover__title">
            {title}
          </h3>
          <p className="card-hover__text">
            <span style={{color:'red'}}>Price: </span>{price}
          </p>
          <button className='btn custom-btn'>Buy Now</button>
        </div>
        <img
          src={image}
          alt={title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/150'; // Placeholder image URL
          }}
        />
      </div>
    </div>
  );
};

export default Card;
