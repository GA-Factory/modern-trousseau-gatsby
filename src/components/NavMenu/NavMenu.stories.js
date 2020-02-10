import React from "react";
import { storiesOf } from "@storybook/react";

import NavMenu from "./NavMenu";
import NavMenuDesktop from "./NavMenuDesktop";
import NavMenuMobile from "./NavMenuMobile";

storiesOf("NavMenuMobile", module).add("NavMenuMobile", () => <NavMenuMobile />);

storiesOf("NavMenuDesktop", module).add("NavMenuDesktop", () => <NavMenuDesktop />);
