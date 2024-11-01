// Input.js
import React from 'react';
import './input.css';

const Input = ({ label, type = 'text', value, onChange, error }) => {
    return (
        <div className="input-container">
            <label className="input-label">{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className={`input-field ${error ? 'input-error' : ''}`}
            />
            {error && <span className="input-error-message">{error}</span>}
        </div>
    );
};

export default Input;
