import React, { Component } from 'react';

export default class App extends Component {
  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(console.log);
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
    );
  }
}
