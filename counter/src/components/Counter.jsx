import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div>
        <h2>Counter: {this.props.count}</h2>
      </div>
    );
  }
}

export default Counter;
