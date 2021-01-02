// import { render } from "@testing-library/react";
import React, { Component } from "react";
import classes from "./Card.module.css";
import Counter from "../Counter";
import products from "../../db/products.json";

class Card extends Component {
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
              <Counter
                count={elem.count}
                step={elem.step}
                min={elem.min}
                max={elem.max}
              />
              )
            </li>
          );
        })}
      </>
    );
  }
}
export default Card;
