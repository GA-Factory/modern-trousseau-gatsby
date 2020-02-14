import React from "react";

import styled from "styled-components";


const TitleModern = styled.h1`
    font-family: Raleway, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    letter-spacing: 0.1px;
    color: #25282B;
    margin: 0;
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 44px;
    }
`;

const TitleTrousseau = styled.h1`
    font-family: Playfair display;
    font-style: italic;
    font-weight: bold;
    font-size: 24px;
    letter-spacing: 0.1px;
    color: #25282B;
    margin: 0 0 0 1%;
    line-height: 0.9;
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 44px;
      line-height: 0.85;
    }
`;

const LogoDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: center;
    align-items: baseline;
`;

const LogoTag = styled.div`
    align-items: baseline;
    display: flex;
    flex-direction: column;
    margin: auto;
    font-size: 12px;
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 20px;
    }
`;

const TagLine = styled.div`
    font-family: Raleway, sans-serif;
    font-style: normal;
    font-weight: 300;
    letter-spacing: 0.1px;
    color: #25282B;
    margin: auto;
`;

const Logo = props => {
  let classList = "logo-tag";

  let types = ["logo", "notag", "tagline"];

  if (types.includes(props.type)) {
    classList += ` ${props.type}`;
  }

  if (props.tagline) {
    classList += ` tagline`;
  }

  if (props.notag) {
    classList += ` notag`;
  }

  return (
    <>
      <LogoTag>
        <LogoDiv>
          <TitleModern>{props.title1}</TitleModern>
          <TitleTrousseau>{props.title2}</TitleTrousseau>
        </LogoDiv>
      <TagLine className={classList}>{props.tagline}</TagLine>
      </LogoTag>
    </>
  );
};
export default Logo;
