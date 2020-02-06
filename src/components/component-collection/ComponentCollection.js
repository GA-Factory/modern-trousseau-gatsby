import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

const Collection = styled.div`
display: flex;
flex-direction: column;
width: 100%;
background-color: ${props => props.theme.colors.primaryPink};
@media (min-width: ${props => props.theme.breakpoints.tablet}) {
  height: 360px;
  padding: 30px 10px 10px 10px;
}
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  padding: 20px 20px 20px 40px;
  justify-content: space-around;
  background-color: ${props => props.theme.colors.primaryPink};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 280px;
    padding: 10px 10px 10px 10px;
  }
`;

const GownImageMobile1 = styled.img`
  width: 148px;
  height: 157px;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-block;
    width: 260px;
    height: 267px;
  }
`;

const GownImageMobile2 = styled.img`
  width: 148px;
  height: 157px;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-block;
    width: 250px;
    height: 267px;
  }
`;

const GownImageScreen1 = styled.img`
  width: 120px;
  height: 150px;
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-block;
    width: 200px;
    height: 267px;
  }
`;

const GownImageScreen2 = styled.img`
  width: 120px;
  height: 150px;
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-block;
    width: 260px;
    height: 267px;
  }
`;

const Title = styled.p`
  text-align: center;
  font-weight: bold;
  margin-bottom: 8px;
  font-family: ${props => props.theme.fontStyles.h1Styles.fontStyle};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-family: ${props => props.theme.fontStyles.h3Styles.fontStyle};
    font-size: ${props => props.theme.fontStyles.h3Styles.fontSize};
    margin-top: 10px
  }
`;

const ComponentCollection = ({ images }) => (
  <>
    <Collection>
      <Container>
        <GownImageScreen1 src={images[0]}></GownImageScreen1>
        <GownImageMobile1 src={images[1]}></GownImageMobile1>
        <GownImageScreen2 src={images[2]}></GownImageScreen2>
        <GownImageMobile2 src={images[3]}></GownImageMobile2>
      </Container>
      <Title>Fall Collection 2020</Title>
    </Collection>
  </>
);

export default ComponentCollection;
