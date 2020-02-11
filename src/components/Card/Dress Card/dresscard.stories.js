import React from "react";
import { storiesOf } from "@storybook/react";
import Dress from "../../../assets/images/Tassel.svg"

import DressCard from "./dresscard";

storiesOf("DressCard", module)
  .add("DressCard", () => (
    <DressCard
      type="dress"
      title="Create Your Dream Dress"
      paragraph="Anything and everything is customizable to make you feel confident & beautiful."
    />
  ));
