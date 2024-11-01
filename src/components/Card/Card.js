// Card.js
import React from 'react';
import './card.css';

const Card = ({ title, children }) => {
    return (
        <div className="card">
            <h2 className="card-title">{title}</h2>
            <div className="card-content">
                {children}
            </div>
        </div>
    );
};

export default Card;
