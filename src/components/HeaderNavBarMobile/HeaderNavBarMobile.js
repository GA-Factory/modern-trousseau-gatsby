import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Logo from "../FullLogo/Logo";

const UL = styled.ul`
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  background-color: #fae5dc;

  padding: 20px;

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const HeaderNavBarMobile = props => {
  return (
    <>
      <UL>
        <Link to="/gowns">
          <p>OUR GOWNS</p>
        </Link>

        <Link to="/visit">
          <p>VISIT US</p>
        </Link>

        <Link to="book-appointment">
          <p>BOOK AN APPOINTMENT</p>
        </Link>

        <Link to="/about">
          <p>ABOUT US</p>
        </Link>
      </UL>
    </>
  );
};
export default HeaderNavBarMobile;
