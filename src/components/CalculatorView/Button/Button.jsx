import React from 'react';
import './Button.css';

const ButtonType  = {
    Input: 'input',
    Operator: 'operator',
    Function: 'function',
};

class Button extends React.Component {
    
    isOversized() {
        return this.props.isOversized;
    }

    _styleForButtonType() {
        switch (this.props.buttonType) {
            case ButtonType.Operator:
                return 'operator-button';
            case ButtonType.Function:
                return 'function-button';
            default:
                return '';
        }
    }

    render() {
        return (
            <div 
                className={`button-wrapper ${this._styleForButtonType()} ${this.isOversized() ? 'button-oversized' : ''}`}
                onClick={() => this.props.onClick()}>
                {this.props.children}
            </div>
        );
    }
}

export { ButtonType, Button };
