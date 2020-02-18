import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const Collection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  height: auto;
  padding: 25px 10px 20px;
  justify-content: space-evenly;
  background-color: ${props => props.theme.colors.primaryPink};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 280px;
    padding: 10px 10px 10px 10px;
    max-width: 1250px;
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
  margin-bottom: 15px;
  font-family: ${props => props.theme.fontStyles.h1Styles.fontStyle};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-family: ${props => props.theme.fontStyles.h3Styles.fontStyle};
    font-size: 24px;
    margin-top: 10px;
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
