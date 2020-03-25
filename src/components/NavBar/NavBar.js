import React from "react";
import { Link } from "gatsby";
import Icons from "../Icons/FAIcon";
import Logo from "../FullLogo/Logo";
import Burger from "../Hamburger/Hamburger";
import styled from "styled-components";

const NavBarNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  background-color: #e5e5e5;
  padding: 10px 10px;
`;

const IconWrapper = styled.div`
  padding-right: 5px;
`;

const NavBar = props => {
  return (
    <>
      <NavBarNav>
        <Burger />
        <Logo notag tagline title1="MODERN" title2="trousseau" />
        <IconWrapper>
          <Link to="/visit">
            <Icons name={["fas", "map-marker-alt"]} size="lg" />
          </Link>
        </IconWrapper>
      </NavBarNav>
    </>
  );
};

export default NavBar;
