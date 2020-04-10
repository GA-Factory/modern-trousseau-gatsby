import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const UL = styled.ul`
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  background-color: #fae5dc;
  // #b08be8
  // #8bafe8
  // #609490
  // #34eb86
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  height: 100vh;
  position: sticky;

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const PTag = styled.p`
  padding: 20px;
`;

const HeaderNavBarMobile = props => {
  return (
    <>
      <UL>
        <Link to="/">
          <PTag>HOME</PTag>
        </Link>
        <Link to="/gowns">
          <PTag>OUR GOWNS</PTag>
        </Link>

        <Link to="/visit">
          <PTag>VISIT US</PTag>
        </Link>

        <Link to="book-appointment">
          <PTag>BOOK AN APPOINTMENT</PTag>
        </Link>

        <Link to="/about">
          <PTag>ABOUT US</PTag>
        </Link>
      </UL>
    </>
  );
};
export default HeaderNavBarMobile;
