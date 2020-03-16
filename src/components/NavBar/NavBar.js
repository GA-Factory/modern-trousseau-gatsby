import React from "react";
import { Link } from "gatsby";
import Icons from "../Icons/FAIcon";
import "./NavBar.css";
import Logo from "../FullLogo/Logo";
import Burger from "../Hamburger/Hamburger";

const NavBar = props => {
  return (
    <>
      <nav className="nav-bar">
        <Burger></Burger>
        {/* gray menu starts */}
        {/* <div className="mobile-style"> */}
        {/* Replace with burger component when complete */}
        {/* <Link to="#">
            <Icons name={["fas", "bars"]} size="lg" />
          </Link>
        </div> */}
        {/* gray menu ends */}
        <div className="mobile-style">
          {/* Replace with logo component */}
          <Logo notag tagline title1="MODERN" title2="trousseau" />
        </div>
        <div className="mobile-style">
          <Link to="#">
            <Icons name={["fas", "search"]} size="lg" />
          </Link>
        </div>
        <div className="desktop-style">
          <Link to="#">
            <Icons name={["fas", "search"]} />
          </Link>
        </div>
        <div className="desktop-style">
          <Link to="#">
            <Icons name={["fas", "map-marker-alt"]} />
          </Link>
        </div>
        <div className="desktop-style">
          <Link to="#">
            <Icons name={["far", "user"]} />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
