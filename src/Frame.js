import React, { Component } from 'react';
import './Frame.css';

class Frame extends Component {
  handleFirstTurn = (e) => {
    this.props.handleTurn(e.target.value, this.props.index, 'firstTurn');
  }

  handleSecondTurn = (e) => {
    this.props.handleTurn(e.target.value, this.props.index, 'secondTurn');
  }

  render() {
    return (
      <div className='input-frame'>
        <input value={this.props.frame[0]} onChange={ this.handleFirstTurn }/>
        <input value={this.props.frame[1]} onChange={ this.handleSecondTurn }/>
      </div>
    );
  }
}

export default Frame;
