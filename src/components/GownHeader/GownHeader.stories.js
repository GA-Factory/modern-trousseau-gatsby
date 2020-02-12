import React from "react";
import { storiesOf } from "@storybook/react";
import GownHeader from "./GownHeader";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

let open = false;
let icon = faSlidersH;

storiesOf("GownHeader", module).add("GownHeader", () => (
  <GownHeader icon={icon} open={open} />
));
