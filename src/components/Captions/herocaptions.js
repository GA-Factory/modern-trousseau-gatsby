import React from "react";
import styled from "styled-components";

const CaptionContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 420px;
  text-align: left;
`

const CaptionTitle = styled.h4`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 35px;
  color: #fff;
`

const CaptionSubText = styled.span`
  font-family: inherit;
  font-style: inherit;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #fff;
`

const HeroCaption = props => {
  return (
    <CaptionContainer>
      <CaptionTitle>{props.title}</CaptionTitle>
      <CaptionSubText>{props.description}</CaptionSubText>
    </CaptionContainer>
  )
};

export default HeroCaption;
