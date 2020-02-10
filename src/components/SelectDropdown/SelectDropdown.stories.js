import React from "react";
import { storiesOf } from "@storybook/react";
import SelectDropdown from "./SelectDropdown";

function handleChange(e) {
  console.log(e.target.value);
}

storiesOf("SelectDropdown", module).add("SelectDropdown", () => (
  <SelectDropdown
    className={"selectDropdown"}
    option={[
      "Baltimore, MD",
      "Charleston, SC",
      "Long Island, NY",
      "Louisville, KY",
      "Nashville, TN",
      "New Haven, CT",
      "Washington, DC"
    ]}
    onChange={handleChange}
  />
));
