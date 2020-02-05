import React from "react";
import { storiesOf } from "@storybook/react";

import Logo from "./Logo";

storiesOf("Logo", module)
  .add("Logo", () => <Logo tagline />)
  .add("Logo without tag", () => <Logo notag />);
