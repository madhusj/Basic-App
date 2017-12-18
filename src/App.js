import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hi Kishan..welcome to React</h1>
        </header>
        <p className="App-intro">
          This is by Continous Integration and Continous Delivery
        </p>
      </div>
    );
  }
}

export default App;
