import React from 'react';
import './Input.css';

export const Input = props => (
    <div className="input-wrapper">
        <div className="input-detailed-label">
            {props.detailedInput}
        </div>
        <div className="input-label">
            {props.input}
        </div>
    </div>
);