import React from "react";
import { storiesOf } from "@storybook/react";

import Logo from "./Logo";

storiesOf("Logo", module)
  .add("Logo", () => <Logo tagline title1="MODERN" title2="trousseau" tagline="designed & made with love in the usa"></Logo>)
  .add("Logo without tag", () => <Logo notag tagline title1="MODERN" title2="trousseau"></Logo>);
