import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
import "./Button.css";

storiesOf("Button", module)
  .add("Light Pink", () => <Button label="Book Now" type="light-pink" />)

  .add("Dark Pink", () => <Button label="DONE" type="dark-pink" />)

  .add("Red", () => (
    <Button label="Browse Dresses" type="red" large />
  ))

  .add("Grey", () => (
    <Button label="Modern Trousseau Bride" type="grey" large />
  ))

  .add("White", () => (
    <Button label="Book Appointment" type="white" large />
  ));
