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

  getFrameTotal (index) {
    return 18;
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
                            { this.getFrameTotal(index) }
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
