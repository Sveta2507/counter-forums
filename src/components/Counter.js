import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./Counter.module.css";
import actions from "../redux/counter/actions";

const Counter = ({ count, increment, decrement, step, handleClick }) => {
  return (
    <>
      <h2>Counter</h2>
      <div className={classes.counterWrapper}>
        <button
          name="decrement"
          className={classes.decrement}
          onClick={() => {
            decrement(step);
          }}
        >
          -
        </button>
        <p>{count}</p>
        <button
          name="increment"
          className={classes.increment}
          onClick={handleClick}
        >
          +
        </button>
      </div>
    </>
  );
};

// class Counter extends Component {
//   state = {
//     count: this.props.count,
//     step: this.props.step,
//     min: this.props.min,
//     max: this.props.max,
//   };

//   handleDecrement = () => {
//     console.log("click decrement");
//     const { count, min, step } = this.state;
//     if (count > min) {
//       this.setState((prevState) => {
//         return {
//           count: prevState.count - step,
//         };
//       });
//     }
//   };
//   handleIncrement = () => {
//     console.log("click increment");
//     const { count, max, step } = this.state;
//     if (count < max) {
//       this.setState((prevState) => {
//         return {
//           count: prevState.count + step,
//         };
//       });
//     }
//   };
//   render() {
//     return (
//       <>
//         <h2>Counter</h2>
//         <div className={classes.counterWrapper}>
//           <button className={classes.decrement} onClick={this.handleDecrement}>
//             -
//           </button>
//           <p>{this.state.count}</p>
//           <button className={classes.increment} onClick={this.handleIncrement}>
//             +
//           </button>
//         </div>
//       </>
//     );
//   }
// }

const mapStateToProps = (state) => {
  return {
    count: state.counter.value,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => {
//       return dispatch(actions.increment(5));
//     },
//     decrement: () => {
//       return dispatch(actions.decrement(5));
//     },
//   };
// };

const mapDispatchToProps = {
  increment: actions.increment,
  decrement: actions.decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
