import React from "react";
import Number from "./Number";

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("timer run");
      this.setState({ number: Math.floor(Math.random() * 100) });
    }, 1500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentDidCatch(error) {
    console.log(error);
    this.setState({ error: true });
  }

  render() {
    return (
      <div>
        {this.state.error ? (
          <div>There was an error</div>
        ) : (
          <Number number={this.state.number} />
        )}
      </div>
    );
  }
}
