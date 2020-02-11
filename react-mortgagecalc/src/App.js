import React from 'react';
import logo from './logo.svg';
import './App.css';
import CalculateForm from './components/CalculateForm';

function App() {
  return (
    /* shift+alt+a */

/*     <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header> */

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
        <CalculateForm />
      </div>
    </div>
  );
}

export default App;
