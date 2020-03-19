import React from "react";
import { Link } from "gatsby";
import Icons from "../Icons/FAIcon";
import "./NavBar.css";
import Logo from "../FullLogo/Logo";
import Burger from "../Hamburger/Hamburger";
import styled from "styled-components";

const NavBarNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  background-color: #e5e5e5;
  padding: 10px 10px;
`;

const DivMobile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NavBar = props => {
  return (
    <>
      <NavBarNav>
        <Burger />
        <DivMobile>
          <Logo notag tagline title1="MODERN" title2="trousseau" />
        </DivMobile>
        <DivMobile>
          <Link to="/visit">
            <Icons name={["fas", "map-marker-alt"]} size="lg" />
          </Link>
        </DivMobile>
      </NavBarNav>
    </>
  );
};

export default NavBar;
