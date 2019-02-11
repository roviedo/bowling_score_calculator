import React, { Component } from 'react';
import './Frame.css';

class Frame extends Component {
  handleFirstTurn = (e) => {
    this.props.handleTurn(e.target.value, this.props.index, 'firstTurn');
  }

  handleSecondTurn = (e) => {
    this.props.handleTurn(e.target.value, this.props.index, 'secondTurn');
  }

  handleThirdTurn = (e) => {
    this.props.handleTurn(e.target.value, this.props.index, 'thirdTurn');
  }

  render() {
    return (
      <div className='input-frame'>
        <input value={this.props.frame[0]} onChange={ this.handleFirstTurn }/>
        <input value={this.props.frame[1]} onChange={ this.handleSecondTurn }/>
        { this.props.index === 9 ? <input value={this.props.frame[2]} onChange={ this.handleThirdTurn }/> : null }
      </div>
    );
  }
}

export default Frame;
