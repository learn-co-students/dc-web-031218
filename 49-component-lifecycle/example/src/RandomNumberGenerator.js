import React from 'react';
import Number from './Number';

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ number: Math.floor(Math.random() * 100) });
    }, 1500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <Number number={this.state.number} />
      </div>
    );
  }
}
