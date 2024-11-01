// Button.js
import React from 'react';
import './button.css';

const Button = ({ type = 'button', children, onClick, disabled = false }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`button ${disabled ? 'button-disabled' : ''}`}
        >
            {children}
        </button>
    );
};

export default Button;
