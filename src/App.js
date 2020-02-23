import React, { Component } from 'react';
import './App.css';
import CalculatorView from './components/CalculatorView/CalculatorView';

class App extends Component {

  render() {
    return (
      <div className="app">
        <CalculatorView>
        </CalculatorView>
      </div>
    );
  }
}

export default App;
