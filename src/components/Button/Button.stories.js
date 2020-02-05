import React from "react";
import { storiesOf } from "@storybook/react";
import PinkButton from "./Button";

storiesOf("Button", module)
  .add("Browse Now", () => <PinkButton label="Browse Now" ftcolor="#441f0e" ftweight="bold" ftsize="15px" ftheight="23px" />)
  .add("Book Now", () => <PinkButton label="Book Now" type="light-pink" />)
  .add("Visit Us", () => <PinkButton label="Visit Us" type="light-pink" />)
  .add("View Dress", () => <PinkButton label="View Dress" type="light-pink" />)
  .add("Submit", () => <PinkButton label="SUBMIT" type="light-pink" />)





