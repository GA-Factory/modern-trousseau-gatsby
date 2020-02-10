import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`;

const Headline = styled.h1`
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #0f1f2f;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    ${props => props.theme.fontStyles.h1Styles}
  }
`;

const Slogan = styled.div`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
  color: #0f1f2f;
  text-align: center;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const HR = styled.hr`
  border: 0.5px solid #0f1f2f;
  width: 90%;
  margin-top: 20px;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    border: 1px solid #000000;
    margin-top: 35px;
  }
`;

const Tagline = props => {
  return (
    <>
      <Container>
        <Headline>{props.headline}</Headline>
        <Slogan>{props.slogan}</Slogan>
        <HR />
      </Container>
    </>
  );
};

export default Tagline;
