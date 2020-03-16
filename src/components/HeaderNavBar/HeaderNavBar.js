import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Logo from "../FullLogo/Logo";


const HeaderNav = styled.nav`
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  background-color: #fae5dc;
  width: 100%;
  height: 100%;
  padding: 20px 0;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  display: flex;
  @media (min-width: 810px) {
    padding: 0;
    height: auto;
    display: flex;
  }
`;
const HeaderLogo = styled.div`
  padding: 30px 20px;
  margin-top: 30px;
  font-size: 64px;
  display: none;
  @media (min-width: 810px) {
    display:block;
  }
`;

const UL = styled.ul`
  display: flex;
  flex-flow: column;
  @media (min-width: 810px) {
    flex-flow: row;
  }
`;

const LiHeader = styled.li`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  @media (min-width: 810px) {
    flex-flow: row;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const HeaderNavBar = props => {
  return (
    <>
      <HeaderNav>
        <HeaderLogo>
          <Logo notag tagline title1="MODERN" title2="trousseau" />
        </HeaderLogo>
        <UL>
          <LiHeader>
            <Link to="/gowns">
              <p>OUR GOWNS</p>
            </Link>
          </LiHeader>
          <LiHeader>
            <span>&#183;</span>
          </LiHeader>
          <LiHeader>
            <Link to="/visit">
              <p>VISIT US</p>
            </Link>
          </LiHeader>
          <LiHeader>
            <span>&#183;</span>
          </LiHeader>
          <LiHeader>
            <Link to="book-appointment">
              <p>BOOK AN APPOINTMENT</p>
            </Link>
          </LiHeader>
          <LiHeader>
            <span>&#183;</span>
          </LiHeader>
          <LiHeader>
            <Link to="/about">
              <p>ABOUT US</p>
            </Link>
          </LiHeader>
        </UL>
      </HeaderNav>
    </>
  );
};
export default HeaderNavBar;
