import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Icons from '../Icons/FAIcon';
import Logo from '../FullLogo/Logo';

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  background-color: #E5E5E5;
  padding: 10px 20px;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;

const Desktop = styled.div`
  padding: 0px 10px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Mobile = styled.div`
  display: none;
  padding: 0px 10px;
  @media screen and (max-width: 768px) {
    padding-top: 15px;
    display: block;
  }
`;


const NavBar = () => (
  <>
      <Nav>
        <Mobile>
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
        </Desktop>
      </Nav>
  </>
);

export default NavBar;
