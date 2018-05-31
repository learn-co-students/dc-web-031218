import React, { Component } from "react";
import logo from "./logo.svg";
import { connect } from "react-redux";

class Header extends Component {
  renderDescription = () => {
    const remainder = this.props.count % this.props.stepSize;
    const upToNext = this.props.stepSize - remainder;
    return `The current count (${this.props.count}) is less than ${this.props
      .count + upToNext}`;
  };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.renderDescription()}</h1>
        <input
          value={this.props.stepSize}
          onChange={this.props.changeStepSize}
        />
      </header>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeStepSize: e =>
      dispatch({
        type: "CHANGE_STEP_SIZE",
        payload: { stepSize: e.target.value }
      })
  };
};

const mapStateToProps = state => {
  return { count: state.count, stepSize: state.stepSize };
};

const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);
export default ConnectedHeader;
