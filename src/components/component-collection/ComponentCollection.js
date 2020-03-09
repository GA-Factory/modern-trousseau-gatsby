import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const Collection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 25px 10px 25px 10px;
  background-color: ${props => props.theme.colors.primaryPink};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    max-height: 380px;
    padding: 35px 10px 35px 10px;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding: 5px 0px 15px;
  justify-content: space-evenly;
  background-color: ${props => props.theme.colors.primaryPink};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 280px;
    padding: 10px 10px 10px 10px;
    max-width: 1250px;
  }
`;

const Title = styled.h3`
  text-align: center;
  font-weight: bold;
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  line-height: 19px;
  color: #0F1F2F;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-family: ${props => props.theme.fontStyles.h3Styles.fontStyle};
    font-size: 24px;
    margin-top: 10px;
    font-family: "Raleway", sans-serif;
  }
`;

const ImgStyle = styled(Img)`
  display: block;
  height: 170px;
  width: 145px;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 240px;
    height: 267px;
    max-height: 100%;
  }
  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    display: block;
    width: 260px;
    height: 267px;
    max-height: 100%;
  }
`;

const ImgGrow = styled(Img)`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
    width: 240px;
    height: 267px;
    max-height: 100%;
  }
  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    display: block;
    width: 260px;
    height: 267px;
    max-height: 100%;
  }
`;

const ImgGrowLast = styled(Img)`
  display: none;
  @media (min-width: 1110px) {
    display: block;
    width: 260px;
    height: 267px;
    max-height: 100%;
  }
`;

const ComponentCollection = props => {
  const { gowns } = props.data.contentfulCollection;
  return (
    <>
      <Collection>
        <Container>
          <ImgStyle fluid={gowns[0].gownImage.fluid} />
          <ImgStyle fluid={gowns[1].gownImage.fluid} />
          <ImgGrow fluid={gowns[2].gownImage.fluid} />
          <ImgGrowLast fluid={gowns[3].gownImage.fluid} />
        </Container>
        <Title>{props.title}</Title>
      </Collection>
    </>
  );
};

export default ComponentCollection;
