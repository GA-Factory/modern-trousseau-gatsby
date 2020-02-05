import React from "react";
import { storiesOf } from "@storybook/react";
import TextInput from "./TextInput";

function handleChange(event) {
  console.log(event.target.value);
}

storiesOf("TextInput", module)
  .add("Primary", () => (
    <TextInput
      type={"text"}
      placeholder={"Sign up here"}
      onChange={handleChange}
    />
  ))
  .add("Full Name", () => (
    <TextInput
      label={"Full Name*"}
      type={"text"}
      placeholder={""}
      onChange={handleChange}
    />
  ))
  .add("Email", () => (
    <TextInput
      label={"Email*"}
      type={"email"}
      placeholder={""}
      onChange={handleChange}
    />
  ))
  .add("Phone Number", () => (
    <TextInput
      label={"Phone Number*"}
      type={"number"}
      placeholder={""}
      onChange={handleChange}
    />
  ))
  .add("Number of Guests", () => (
    <TextInput
      label={"Number of Guests"}
      type={"number"}
      placeholder={""}
      onChange={handleChange}
    />
  ));
