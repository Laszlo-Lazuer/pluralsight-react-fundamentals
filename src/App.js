import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div onClick={this.props.onClick}>
        this div has been clicked {this.props.clicks} times.
      </div>
    );
  }
}

export default App;
