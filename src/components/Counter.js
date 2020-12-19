import React, { Component } from "react";

import classes from "./Counter.module.css";

class Counter extends Component {
  state = {
    count: 0,
    step: 1,
    min: 0,
    max: 100,
  };
  handleDecrement = () => {
    console.log("click decrement");
    const { count, min, step } = this.state;
    if (count > min) {
      this.setState((prevState) => {
        return {
          count: prevState.count - step,
        };
      });
    }
  };
  handleIncrement = () => {
    console.log("click increment");
    const { count, max, step } = this.state;
    if (count < max) {
      this.setState((prevState) => {
        return {
          count: prevState.count + step,
        };
      });
    }
  };
  render() {
    return (
      <>
        <h2>Counter</h2>
        <div className={classes.counterWrapper}>
          <button className={classes.decrement} onClick={this.handleDecrement}>
            -
          </button>
          <p>{this.state.count}</p>
          <button className={classes.increment} onClick={this.handleIncrement}>
            +
          </button>
        </div>
      </>
    );
  }
}

export default Counter;
