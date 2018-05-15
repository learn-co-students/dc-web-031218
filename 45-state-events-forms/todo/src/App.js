import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: "",
      count: 0
    };
  }

  updateCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  updateFromInput = e => {
    this.setState({
      text: e.target.value,
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header" onClick={this.updateCount}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input onChange={this.updateFromInput} />
        <p className="App-intro">{this.state.text}</p>
        <p> {this.state.count} </p>
      </div>
    );
  }
}

export default App;
