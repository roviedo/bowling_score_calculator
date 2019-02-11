import React, { Component } from 'react';
import Frames from './Frames';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header-title">
          Bolwing Score Calculator
        </div>
        <img className="header-image" src="../bowling_pins.png" alt="bowling pins"/>
        <Frames />
      </div>
    );
  }
}

export default App;
