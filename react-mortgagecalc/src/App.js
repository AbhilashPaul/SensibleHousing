import React, { Component } from 'react';
import './App.css';
import MortgageCalculatorForm from './components/MortgageCalculatorForm';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'
import './components/CalcFormStyle.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div>
          <header className="App-header"></header>
        </div>
          <Jumbotron fluid>
            <container>
              <h1 className="heading">Mortgage Payment Calculator</h1>
              <p>Use this calculator to compare your option and find the mortgage payment amount that best suits your needs</p>
            </container>
          </Jumbotron>
          <div>
            <MortgageCalculatorForm />
          </div>
      </div>
    );
  }
}

export default App;
