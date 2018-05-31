import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./logo.svg";
import "./App.css";
import { createStore } from "redux";

// what is the state of the app? what is the shape?
// { count: number }

const reducer = (oldState = { count: 0 }, action) => {
  console.log(oldState, action);
  switch (action.type) {
    case "INCREMENT":
      return {
        count: oldState.count + action.payload.amount
      };
    case "DECREMENT":
      return {
        count: oldState.count - action.payload.amount
      };
    default:
      return oldState;
  }
};

const increment = amount =>
  store.dispatch({ type: "INCREMENT", payload: { amount } });

const decrement = amount =>
  store.dispatch({ type: "DECREMENT", payload: { amount } });

const store = createStore(reducer);

class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  render() {
    console.log(store.getState());
    return (
      <div className="App">
        <Header count={store.getState().count} />
        <Counter
          count={store.getState().count}
          increment={increment}
          decrement={decrement}
        />
      </div>
    );
  }
}

class Header extends Component {
  renderDescription = () => {
    const remainder = this.props.count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${this.props.count + upToNext}`;
  };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.renderDescription()}</h1>
      </header>
    );
  }
}

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <h1>{this.props.count}</h1>
        <button onClick={() => this.props.decrement(2)}> - 2 </button>
        <button onClick={() => this.props.decrement(1)}> - </button>
        <button onClick={() => this.props.increment(1)}> + </button>
        <button onClick={() => this.props.increment(2)}> + 2 </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
