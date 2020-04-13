import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Icons from '../Icons/FAIcon';
import Logo from '../FullLogo/Logo';
import Burger from '../Hamburger/Hamburger';

const NavBarContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavBarNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  background-color: #e5e5e5;
  padding: 10px 10px;
`;

const IconWrapper = styled.div`
  padding-right: 5px;
`;

// const Nav = styled.nav`
//   display: flex;
//   justify-content: flex-end;
//   width: 100%;
//   margin: 0 auto;
//   align-items: center;
//   background-color: #E5E5E5;
//   padding: 10px 20px;
//   @media screen and (max-width: 768px) {
//     justify-content: space-between;
//   }
// `;

// const Desktop = styled.div`
//   padding: 0px 10px;
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// const Mobile = styled.div`
//   display: none;
//   padding: 0px 10px;
//   @media screen and (max-width: 768px) {
//     padding-top: 15px;
//     display: block;
//   }
// `;


const NavBar = () => (
    <NavBarContainer>
      <NavBarNav>
        <Burger />
        <Logo notag tagline title1="MODERN" title2="trousseau" />
        <IconWrapper>
          <Link to="/visit">
            <Icons name={['fas', 'map-marker-alt']} size="lg" />
          </Link>
        </IconWrapper>
      </NavBarNav>
    </NavBarContainer>
  );


export default NavBar;
