import React from "react";
import { storiesOf } from "@storybook/react";

import NavMenu from "./NavMenu";
import NavMenuDesktop from "./NavMenuDesktop";
import NavMenuMobile from "./NavMenuMobile";

// ORIGINALLY IT WAS JUST NAV MENU HERE...I HAD TO CREATE A SEPARATE MENU FOR DESKTOP B/C
// THE NAV MENU IS USED IN 2 DIFFERENT PLACES, MADE A SEPARATE ONE FOR MOBILE AS WELL THAT 
// MAY OR MAY NOT BE USEFUL, BUT OPTED NOT TO DELETE IN THE EVENT THAT IT IS USEFUL
// 
//     ------------------------MICHAEL-----------------------

storiesOf("NavMenu", module).add("NavMenu", () => <NavMenu />);

storiesOf("NavMenuMobile", module).add("NavMenuMobile", () => <NavMenuMobile />);

storiesOf("NavMenuDesktop", module).add("NavMenuDesktop", () => <NavMenuDesktop />);


<<<<<<< HEAD
storiesOf("NavMenu", module).add("NavMenu", () => <NavMenu />);
=======
>>>>>>> develop
