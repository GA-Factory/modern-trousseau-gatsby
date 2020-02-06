import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-around;
`

const Headline = styled.h1`
  font-family: "Playfair Display";
  font-style: italic;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #0F1F2F;
`;

const Slogan = styled.div`
font-family: 'Raleway';
font-style: normal;
font-weight: normal;
font-size: 11px;
line-height: 13px;
color: #0F1F2F;
text-align: center;
`;

const Tagline = props => {
  return (
    <>
    <Container>
      <Headline>{props.headline}</Headline>
      <Slogan>{props.slogan}</Slogan>
      </Container>
    </>
  );
};

export default Tagline;
