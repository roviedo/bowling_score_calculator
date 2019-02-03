import React, { Component } from 'react';
import Frames from './Frames';
import ScoreBoard from './ScoreBoard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Frames />
        <ScoreBoard />
      </div>
    );
  }
}

export default App;
