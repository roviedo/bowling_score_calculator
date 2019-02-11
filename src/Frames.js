import React, { Component } from 'react';
import Frame from './Frame';
import ScoreBoard from './ScoreBoard';
import './Frames.css';

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
        ['', '', '']
      ],
      framesTotals: ['', '', '', '', '', '', '' ,'', '', '']
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
      if (index === 9) {
        frames[index] = [frameValue, frames[index][1]];
      } else if (frameValue === 10) {
        frames[index] = [frameValue, 0];
      } else {
        frames[index] = [frameValue, frames[index][1]];
      }
    } else if (turn === 'secondTurn') {
      if (index === 9) {
        if (frames[index][0] === 10 && newValue <= 10) {
          frameValue = newValue;
        } else if ((newValue + frames[index][0]) <= 10) {
          frameValue = newValue;
        } else {
          frameValue = '';
        }
        frames[index] = [frames[index][0], frameValue, frames[index][2]];
      } else {
        if ((newValue + frames[index][0]) > 10) {
          frameValue = '';
        } else {
          frameValue = newValue;
        }
        frames[index] = [frames[index][0], frameValue];
      }
    } else if (turn === 'thirdTurn') {
      if (newValue > 10) {
        frameValue = '';
      } else if ((frames[index][0] > 0 && frames[index][0] < 10) && (frames[index][1] > 0 && frames[index][1] < 10)) {
        frameValue = newValue;
      } else if ((frames[index][0] === 10) && (frames[index][1] === 10)) {
        frameValue = newValue;
      } else if ((frames[index][0] === 10) && (frames[index][1] > 0 && frames[index][1] < 10) && (frames[index][1] + newValue <=10)) {
        frameValue = newValue;
      }
      frames[index] = [frames[index][0], frames[index][1], frameValue];
    }

    const newFrameTotals = this.getFramesTotals();
    this.setState({
      frames,
      framesTotals: newFrameTotals
    });
  }

  getFramesTotals() {
    let framesTotals = this.state.framesTotals;
    for (let index=0; index<this.state.frames.length; index++) {
      const prevIndexTotal = index > 0 ? framesTotals[index-1] : 0;
      if (index === 9) {
        framesTotals[index] = prevIndexTotal + this.state.frames[index].filter((pins) => pins >= 0).reduce((total, num) => total + num, 0);
        
      } else if (index === 8) {
        if (this.state.frames[index+1][0] === 10) {
          if (this.state.frames[index+1][1] === 10) {
            framesTotals[index] = prevIndexTotal + 30;
          } else if (this.state.frames[index+1][1] !== '' && (this.state.frames[index+1][1] < 10)) {
            framesTotals[index] = prevIndexTotal + 20 + this.state.frames[index+1][1];
          }
        }
      } else if (this.state.frames[index][0] === 10) {
        // check next two frames
        if (this.state.frames[index+1][0] === 10) {
            if (index < 8 && this.state.frames[index+2][0] === 10) {
                framesTotals[index] = prevIndexTotal + 30;
            } else if (index < 8 && this.state.frames[index+2][0] !== '' && (this.state.frames[index+2][0] < 10)) {
                framesTotals[index] = prevIndexTotal + 20 + this.state.frames[index+2][0];
            }
        } else if (this.state.frames[index+1][0] !== '' && this.state.frames[index+1][1] !== '' && ((this.state.frames[index+1][0] + this.state.frames[index+1][1]) <= 10)) {
            framesTotals[index] = prevIndexTotal + 10 + (this.state.frames[index+1][0] + this.state.frames[index+1][1]);
        }
      } else if ((this.state.frames[index][0] + this.state.frames[index][1]) === 10) {
          if (this.state.frames[index+1][0] > 0) {
            framesTotals[index] = prevIndexTotal + (this.state.frames[index][0] + this.state.frames[index][1] + this.state.frames[index+1][0]);
          } else {
              framesTotals[index] = '';
          }
      } else if (this.state.frames[index][0] !== '' && this.state.frames[index][1] !== '' && ((this.state.frames[index][0] + this.state.frames[index][1]) < 10)) {
          framesTotals[index] = prevIndexTotal + (this.state.frames[index][0] + this.state.frames[index][1]);
      }
    }

    return framesTotals;
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
        <div className='input-frames'>
          { frames }
        </div>
        <ScoreBoard frames={this.state.frames} framesTotals={this.state.framesTotals} />
      </div>
    );
  }
}

export default Frames;
