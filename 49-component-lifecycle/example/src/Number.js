import React from "react";

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      increasing: false,
      number: 0
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.number > prevState.number) {
      return { increasing: true, number: nextProps.number };
    } else {
      return { increasing: false, number: nextProps.number };
    }
  }

  render() {
    const { increasing } = this.state;
    return (
      <div>
        <h1 style={{ color: increasing ? "green" : "red" }}>
          {this.props.number}
          <i className={`chevron ${increasing ? "up" : "down"} icon`} />
        </h1>
      </div>
    );
  }
}
