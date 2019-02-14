import React, { Component } from 'react';
import './ScoreBoard.css';

class ScoreBoard extends Component {
  getTurnScore (frame, turn) {
    let turnScore;
    if (frame[turn] === 0) {
        turnScore = '-';
    } else if (frame[turn] === 10) {
        turnScore = 'X';
    } else if (turn === 1 && (frame[0] + frame[1] === 10)) {
        turnScore = '/';
    } else if (frame[turn] > 0 && frame[turn] < 10) {
        turnScore = frame[turn];
    }

    return turnScore;
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
                                { this.getTurnScore(frame, 0) }
                            </div>
                            <div className='second-turn'>
                                { this.getTurnScore(frame, 1) }
                            </div>
                            { 
                                index === 9 ? <div className='third-turn'>
                                    { this.getTurnScore(frame, 2) }
                                </div> : null
                            }
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
