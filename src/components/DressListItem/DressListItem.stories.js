import React from "react";
import { storiesOf } from "@storybook/react";
import imageFile1 from "../DressListItem/DressListItemAssets/seraphina.png";

import DressListItem from "./DressListItem";

storiesOf("DressListItem", module).add("DressListItem", () => (
  <DressListItem image1={imageFile1} dressname={"Seraphina"} />
));
