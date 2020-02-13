import React from "react";
import { storiesOf } from "@storybook/react";
import SelectDropdown from "./SelectDropdown";

const title = "Select Flagship";

const locationArr = [
  "Baltimore, MD",
  "Charleston, SC",
  "Long Island, NY",
  "Louisville, KY",
  "Nashville, TN",
  "New Haven, CT",
  "Washington, DC"
];

function handleChange(e) {
  console.log(e.target.value);
}

storiesOf("SelectDropdown", module).add("SelectDropdown", () => (
  <SelectDropdown
    className={"selectDropdown"}
    title={title}
    option={locationArr}
    onChange={handleChange}
  />
));
