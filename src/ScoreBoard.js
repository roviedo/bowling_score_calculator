import React, { Component } from 'react';
import './ScoreBoard.css';

class ScoreBoard extends Component {
  getTurnScore (frameTurnScore) {
    let turnScore;
    if (frameTurnScore === 0) {
        turnScore = '-';
    } else if (frameTurnScore === 10) {
        turnScore = 'X';
    } else if (frameTurnScore > 0 && frameTurnScore < 10) {
        turnScore = frameTurnScore;
    }

    return turnScore;
  }

  getFrameTotal (index, frameTotal) {
    if (this.props.frames[index][0] === 10) {
        // check next two frames
        console.log('going to check next frames');
        if (this.props.frames[index+1][0] === 10) {
            if (this.props.frames[index+2][0] === 10) {
                return 30;
            } else if (this.props.frames[index+2][0] !== '' && (this.props.frames[index+2][0] < 10)) {
                return 20 + this.props.frames[index+2][0];
            }
        } else if (this.props.frames[index+1][0] !== '' && this.props.frames[index+1][1] !== '' && ((this.props.frames[index+1][0] + this.props.frames[index+1][1]) < 10)) {
            return 10 + (this.props.frames[index+1][0] + this.props.frames[index+1][1]);
        }
    } else if ((this.props.frames[index][0] + this.props.frames[index][1]) === 10) {
        console.log('now to check first frame');
        if (this.props.frames[index+1][0] > 0) {
          return (this.props.frames[index][0] + this.props.frames[index][1] + this.props.frames[index+1][0]);
        } else {
            return '';
        }
    } else if (this.props.frames[index][0] !== '' && this.props.frames[index][1] !== '' && ((this.props.frames[index][0] + this.props.frames[index][1]) < 10)) {
        return (this.props.frames[index][0] + this.props.frames[index][1]);
    }
  }

  render() {
    return (
        <div className='score-frames'>
            { 
                this.props.frames.map((frame, index) => {
                    return (
                      <div key={index} className='score-frame'>
                        <div className='turn-score'>
                            <div className='first-turn'>
                                { this.getTurnScore(frame[0]) }
                            </div>
                            <div className='second-turn'>
                                { this.getTurnScore(frame[1]) }
                            </div>
                        </div>
                        <div className='frame-total'>
                            { this.props.framesTotals[index] }
                        </div>
                      </div>
                    );
                })
            }
        </div>
    );
  }
}

export default ScoreBoard;
