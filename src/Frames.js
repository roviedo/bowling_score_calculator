import React, { Component } from 'react';
import Frame from './Frame';

class Frames extends Component {
  constructor (props) {
    super(props);
    this.state = {
      frames: [
        ['', ''],
        ['', ''],
        ['', ''],
        ['', ''],
        ['', ''],
        ['', ''],
        ['', ''],
        ['', ''],
        ['', ''],
        ['', '']
      ]
    }
  }

  handleTurn = (value, index, turn) => {
    const frames = this.state.frames;
    let newValue;
    newValue = parseInt(value);
    if (isNaN(newValue)) newValue = '';
    let frameValue;
    if (turn === 'firstTurn') {
      if (newValue > 10) {
        frameValue = '';
      } else {
        frameValue = newValue
      }
      frames[index] = [frameValue, frames[index][1]];
    } else {
       if ((newValue + frames[index][0]) > 10) {
        frameValue = '';
      } else {
        frameValue = newValue
      }
      frames[index] = [frames[index][0], frameValue];
    }

    this.setState({
      frames
    });
  }

  render() {
    const frames = this.state.frames.map((frame, index) => {
      return (
        <div key={index}>
          <Frame index={index} frame={frame} handleTurn={this.handleTurn} />
        </div>
      );
    });
    return (
      <div>
        { frames }
      </div>
    );
  }
}

export default Frames;
