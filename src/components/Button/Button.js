import React from "react";
import "./Button.css";

const Button = props => {
  let classList = "button";
  let types = [
    "light-pink",
    "dark-pink",
    "small-grey",
    "red",
    "grey",
    "white"
  ];

  if (types.includes(props.type)) {
    classList += ` button-${props.type} `;
  }

  if (props.large) {
    classList += ` button-large`;
  }

  return <button className={classList}> {props.label}</button>;
};

export default Button;
