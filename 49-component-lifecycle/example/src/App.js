import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RandomNumberGenerator from "./RandomNumberGenerator";

class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 3
    };
  }
  // componentDidMount() {
  //   this.timer = setInterval(() => {
  //     console.log("setting count of generators");
  //     this.setState({ count: Math.floor(Math.random() * 5) });
  //   }, 1500);
  // }
  //
  // componentWillUnmount() {
  //   clearInterval(this.timer);
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <RandomNumberGenerator />
      </div>
    );
  }
}

export default App;
