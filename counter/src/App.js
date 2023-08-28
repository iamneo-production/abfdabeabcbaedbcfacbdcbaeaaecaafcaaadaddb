import React, { Component } from 'react';
import Counter from './components/Counter';
import Button from './components/Button';
import AppBar from './components/AppBar';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  handleWindowReset = () => {
    window.location.reload();
  };

  render() {
    return (
      <div className="App">
        <AppBar title="Counter App" onReset={this.handleWindowReset} />
        <Counter count={this.state.count} />
        <Button label="Increment" onClick={this.handleIncrement} />
        <Button label="Decrement" onClick={this.handleDecrement} />
        <Button label="Reset Count" onClick={this.handleReset} />
      </div>
    );
  }
}

export default App;
