import React from "react";
import { storiesOf } from "@storybook/react";

import StoreCollection from "./VisitUs-collection";

storiesOf("StoreCollection", module).add("StoreCollection", () => (
  <StoreCollection
    image={images}
    city="Norfolk"
  ></StoreCollection>
));