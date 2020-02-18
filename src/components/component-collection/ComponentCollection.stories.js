import React from "react";
import { storiesOf } from "@storybook/react";

import ComponentCollection from "./ComponentCollection";

storiesOf("Component-Collection", module).add("Component-Collection", () => (
  <ComponentCollection
    gownimage={images}
    title="Fall 2020"
  ></ComponentCollection>
));
