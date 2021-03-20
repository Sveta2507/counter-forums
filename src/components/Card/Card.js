// import { render } from "@testing-library/react";
import React, { Component } from "react";
import classes from "./Card.module.css";
import Counter from "../Counter";
import products from "../../db/products.json";
import actions from "../../redux/counter/actions";
import { connect } from "react-redux";

class Card extends Component {
  state = {
    current: null,
  };

  handleDecrement = (step) => {
    this.props.decrement(step);
  };
  handleIncrement = (step) => {
    this.props.increment(step);
  };
  handleClick = (e, step) => {
    console.dir(e.target);
    this.setState({})
    if (e.target.name === "increment") {
      this.handleIncrement(step);
    }
    if (e.target.name === "decrement") {
      this.handleDecrement(step);
    }
  };
  render() {
    return (
      <>
        {products.map((elem) => {
          console.log(elem);
          return (
            <li key={elem.id} className={classes.cardWrapper}>
              <img
                className={classes.cardImage}
                src={elem.img}
                alt={elem.title}
              />
              <h3 className={classes.cardTitle}>{elem.title}</h3>
              <p className={classes.cardDescription}>{elem.description}</p>
              <p>
                {elem.price}
                <span>$</span>
              </p>
              {/* <Counter
                count={elem.count}
                step={elem.step}
                min={elem.min}
                max={elem.max}
              /> */}
              <Counter step={elem.step} handleClick={this.handleClick} />)
            </li>
          );
        })}
      </>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Card);
