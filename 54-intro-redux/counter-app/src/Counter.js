import React, { Component } from "react";
import { connect } from "react-redux";

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

const mapStateToProps = state => {
  return { count: state.count };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: amount => dispatch({ type: "INCREMENT", payload: { amount } }),
    decrement: amount => dispatch({ type: "DECREMENT", payload: { amount } })
  };
};

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default ConnectedCounter;
