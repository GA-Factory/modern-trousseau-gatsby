import React from "react";
import { storiesOf } from "@storybook/react";
import PinkButton from "./Button";
import "./Button.css";

storiesOf("Button", module)
  .add("Browse Now", () => <PinkButton label="Browse Now" color="#441f0e" />)
  .add("Book Now", () => <PinkButton label="Book Now" type="light-pink" />)
  .add("Visit Us", () => <PinkButton label="Visit Us" type="light-pink" />)
  .add("View Dress", () => <PinkButton label="View Dress" type="light-pink" />)
  .add("Submit", () => <PinkButton label="SUBMIT" type="light-pink" />)





