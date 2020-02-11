import React, { Component } from 'react';
import './App.css';
import MortgageCalculatorForm from './components/MortgageCalculatorForm';

class App extends Component {


  render() {
    return (
      <div className="App">
        <div>
          <header className="App-header"></header>
        </div>
        <div>
            <h1>Mortgage Payment Calculator</h1>
        </div>
        <div>
            <p>Use this calculator to compare your option and find the mortgage payment amount that best suits your needs</p>
        </div>
        <div>
          <MortgageCalculatorForm />
        </div>
      </div>
    );
  }
}

export default App;
