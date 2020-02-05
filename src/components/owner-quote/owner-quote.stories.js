// owner-quote.stories.js

import React from "react";
import { storiesOf } from "@storybook/react";

import OwnerQuote from "./owner-quote";

storiesOf("OwnerQuote", module).add("Primary", () => (
  <OwnerQuote label="Primary" />
));
