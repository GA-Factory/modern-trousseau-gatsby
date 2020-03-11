import React from "react";
import styled from "styled-components";

const CaptionContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 100%;
  text-align: left;
  z-index: 10;
  position: absolute;
  left: 345px;
  top: 565px;
  padding: 15px 15px 10px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: 750px;
    width: 100%;
    height: 80px;
  }
`;

const CaptionTitle = styled.h4`
  font-family: "Raleway";
  font-style: normal;
  font-weight: bolder;
  font-size: 18px;
  line-height: 21px;
  color: #fff;
  z-index: 10;
  position: relative;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    ${props => props.theme.fontStyles.h4Styles}
  }
`;

const CaptionSubText = styled.span`
  font-family: inherit;
  font-style: inherit;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #fff;
  display: block;
  z-index: 10;
  position: relative;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 15px;
    line-height: 18px;
  }
`;
const HeroCaption = props => {
  return (
    <CaptionContainer>
      <CaptionTitle>{props.title}</CaptionTitle>
      <CaptionSubText>{props.description}</CaptionSubText>
    </CaptionContainer>
  )
};

export default HeroCaption;
