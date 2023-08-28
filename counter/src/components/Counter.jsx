import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div className="counter-container">
        <h2 className="counter-value">Counter: {this.props.count}</h2>
      </div>
    );
  }
}

export default Counter;
