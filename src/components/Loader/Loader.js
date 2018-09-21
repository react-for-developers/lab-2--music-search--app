import React, { Component } from "react";

export default class Loader extends Component {
  state = {
    counter: 0
  };

  componentDidMount() {
    this.counterIntervalId = setInterval(this.incrementCounter, 300);
  }

  componentWillUnmount() {
    clearInterval(this.counterIntervalId);
  }

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter === 2 ? 0 : this.state.counter + 1
    });
  };

  render() {
    const frame = this.state.counter % 3;

    let emoji;
    if (frame === 0) {
      emoji = "🎶";
    } else if (frame === 1) {
      emoji = "🎵";
    } else {
      emoji = "🎼";
    }

    return (
      <span role="img" aria-label="Loader">
        {emoji}
      </span>
    );
  }
}
