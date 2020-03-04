import React from "react";
import Logo from "../FullLogo/Logo";
import SocialMedia from "../SocialMedia/SocialMedia";
import SignUp from "../SignUp/SignUp";

import styled from "styled-components";

const HrLine = styled.hr`
  border: 0.5px solid #0f1f2f;
  width: 100%;
  margin-top: 0;
`;

const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 20px 20px 30px;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 95%;
    justify-content: space-between;
    max-width: 100%;
    margin: 0 auto;
    padding: 20px 20px 30px;
  }
`;

const Spacing1 = styled.div`
  margin-bottom: 10px;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 0;
  }
`;

const Spacing2 = styled.div`
  margin-bottom: 10px;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 0;
  }
`;

const Footer = () => {
  return (
    <>
      <HrLine />
      <FooterDiv>
        <Spacing1>
          <Logo
            tagline
            title1="MODERN"
            title2="trousseau"
            tagline="designed & made with love in the usa"
          />
        </Spacing1>
        <Spacing2>
          <SignUp />
        </Spacing2>
        <SocialMedia />
      </FooterDiv>
    </>
  );
};

export default Footer;
