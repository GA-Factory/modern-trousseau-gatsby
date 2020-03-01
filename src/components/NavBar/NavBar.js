import React from "react";
import { Link } from "gatsby";
import Icons from "../Icons/FAIcon";
import "./NavBar.css";
import Logo from "../FullLogo/Logo";

const NavBar = props => {
  return (
    <>
      <nav className="nav-bar">
        <div className="mobile-style">
          {/* Replace with burger component when complete */}
          <Link to="#">
            <Icons name={['fas', 'bars']} size="lg" />
          </Link>
        </Mobile>
        <Mobile>
          {/* Replace with logo component */}
          <Logo notag tagline title1="MODERN" title2="trousseau" />
        </Mobile>
        <Mobile>
          <Link to="#">
            <Icons name={['fas', 'search']} size="lg" />
          </Link>
        </Mobile>
        <Desktop>
          <Link to="#">
            <Icons name={['fas', 'search']} />
          </Link>
        </Desktop>
        <Desktop>
          <Link to="#">
            <Icons name={['fas', 'map-marker-alt']} />
          </Link>
        </Desktop>
        <Desktop>
          <Link to="#">
            <Icons name={['far', 'user']} />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
