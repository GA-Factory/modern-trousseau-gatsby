// owner-quote.stories.js

import React from "react";
import { storiesOf } from "@storybook/react";

import OwnerQuote from "./owner-quote";

storiesOf("OwnerQuote", module).add("Callie Tein | Designer", () => (
  <OwnerQuote
    quote="The look on a bride's face when she finds her dress - that is priceless
  and incredibly rewarding."
    name="Callie Tein"
    role="Designer"
  />
));
