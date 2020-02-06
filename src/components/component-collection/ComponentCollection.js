import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 200px;
  padding: 20px 20px 20px 40px;
  background-color: ${props => props.theme.colors.primaryPink};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 280px;
    padding: 30px 10px 10px 10px;
  }
`;

const GownImageMobile = styled.img`
  width: 160px;
  height: 150px;
  margin: 0 5px 5px 5px;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-block;
    margin: 8px 15px 12px 15px;
    width: 160px;
    height: 180px;
  }
`;

const GownImageScreen = styled.img`
  width: 120px;
  height: 150px;
  margin: 0 5px 5px 5px;
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-block;
    margin: 8px 15px 12px 15px;
    width: 160px;
    height: 180px;
  }
`;

const Title = styled.p`
  text-align: center;
  font-weight: bold;
  font-family: ${props => props.theme.fontStyles.h1Styles.fontStyle};
`;

const ComponentCollection = ({ images }) => (
  <>
    <Container>
      <GownImageMobile
        src={images[0]}
        className="image first"
      ></GownImageMobile>
      <GownImageMobile
        src={images[1]}
        className="image second"
      ></GownImageMobile>
      <GownImageScreen
        src={images[2]}
        className="image third"
      ></GownImageScreen>
      <GownImageScreen
        src={images[3]}
        className="image fourth"
      ></GownImageScreen>
      <Title>Fall Collection 2020</Title>
    </Container>
  </>
);

export default ComponentCollection;
