import React from "react";
import styled from "styled-components";
import PinkButton from "../Button/Button";
import { Link } from "gatsby";
import Img from "gatsby-image";

const ReviewWrapper = styled.section`
  width: 100%;
  height: auto;
  max-height: 600px;
  background-color: ${props => props.theme.colors.backgroundGray};
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 100%;
  max-width: 1300px;
  justify-content: center;
  align-items: center;
  padding: 25px 30px;
  @media (min-width: 600px) {
    display: flex;
    height: auto;
    max-height: 600px;
    width: 100%;
    justify-content: space-around;
    margin: 0 auto;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 35px 30px;
    justify-content: space-evenly;
  }
  @media (min-width: 1180px) {
    justify-content: space-between;
  }
`;

const ImageAccompaniment = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  @media (min-width: 600px) {
    height: auto;
    width: 50%;
    margin-top: 0;
    padding-left: 10px;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 100%;
    width: 100%;
    margin: 0;
    justify-content: space-evenly;
    padding: 0 10px;
  }
`;

const ReviewContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0;
  @media (min-width: 600px) {
    flex-direction: row;
    height: auto;
    width: auto;
    max-width: 90%;
    justify-content: space-around;
    margin-top: 0;
  }
  @media (min-width: 900px) {
    display: flex;
    height: 100%;
    max-width: 400px;
  }
`;

const Review1 = styled.div`
  font-family: ${props => props.theme.fontStyles.Body3DesktopText.fontFamily};
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  position: relative;
  @media (min-width: 600px) {
    width: 100%;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 95%;
    height: auto;
    position: relative;
  }
  @media (min-width: 900px) {
    display: inline-block;
    width: 100%;
  }
`;

const ButtonPlacer1 = styled.div`
  justify-content: center;
  margin: 15px auto 0;
  @media (min-width: 600px) {
    display: flex;
    margin-top: 10%;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 5%;
    padding-top: 10px;
  }
`;

const ReviewContainer2 = styled.div`
  display: none;
  @media (min-width: 900px) {
    display: flex;
    flex-direction: row;
    height: 100%;
    max-width: 400px;
    align-items: center;
  }
`;

const Review2 = styled.div`
  font-family: ${props => props.theme.fontStyles.Body3DesktopText.fontFamily};
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  margin: 0;
  position: relative;
  @media (min-width: 600px) {
    width: 100%;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    top: 15%;
    width: 95%;
    height: auto;
    position: relative;
  }
`;

const ButtonPlacer2 = styled.div`
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 600px) {
    display: flex;
    margin-top: 3%;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 7%;
  }
`;

const ReviewContainer3 = styled.div`
  display: none;
  @media (min-width: 1180px) {
    display: flex;
    flex-direction: row;
    height: 100%;
    max-width: 400px;
    align-items: center;
  }
`;

const Review3 = styled.div`
  font-family: ${props => props.theme.fontStyles.Body3DesktopText.fontFamily};
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  margin: 0;
  position: relative;
  @media (min-width: 600px) {
    width: 100%;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    top: 15%;
    width: 95%;
    height: auto;
    position: relative;
  }
`;

const ButtonPlacer3 = styled.div`
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 600px) {
    display: flex;
    margin-top: 5%;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 9%;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    width: 50%;
    height: auto;
  }
`;

const Image = styled(Img)`
  display: block;
  width: 100%;
  max-width: 250px;
  height: 300px;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: 220px;
  }
`;

const BrideReview = props => {
  const [nodes] = props.data.allContentfulTestimonial;
  console.log(nodes);
  // const singlereview = nodes.map(review, i => {
  //   return
  //   console.log(singlereview)
  //     // <ReviewContainer1 key={i}>
  //     //   <Image fluid={props.image.fluid} />
  //     // </ReviewContainer1>

  // })
  return (
    <>
      <ReviewWrapper>
        <Container>
          <ReviewContainer1>
            <Image fluid={props.image1} />
            <ImageAccompaniment>
              <Review1>{props.review1}</Review1>
              <ButtonPlacer1>
                <PinkButton
                  label="View Dress"
                  fontsize={`${"14px"}`}
                  weight={`${"bold"}`}
                  height={`${"22px"}`}
                  width={`${"88px"}`}
                  padding={`${"5px 0"}`}
                  shadow={`${"0px 4px 4px rgba(0, 0, 0, 0.25)"}`}
                  desktopwidth={`${"83px"}`}
                  desktoppadding={`${"5px"}`}
                  desktopheight={`${"14px"}`}
                  desktopfontsize={`${"12px"}`}
                  desktopweight={`${"600"}`}
                  desktopcolor={`${"#000000"}`}
                  family={`${"'Sahitya'"}`}
                  color={`${"#441F0E"}`}
                />
              </ButtonPlacer1>
            </ImageAccompaniment>
          </ReviewContainer1>
          <ReviewContainer2>
            <Image fluid={props.image2} />
            <ImageAccompaniment>
              <Review2>{props.review2}</Review2>
              <ButtonPlacer1>
                <PinkButton
                  label="View Dress"
                  fontsize={`${"14px"}`}
                  weight={`${"bold"}`}
                  height={`${"22px"}`}
                  width={`${"88px"}`}
                  padding={`${"5px 0"}`}
                  shadow={`${"0px 4px 4px rgba(0, 0, 0, 0.25)"}`}
                  desktopwidth={`${"83px"}`}
                  desktoppadding={`${"5px"}`}
                  desktopheight={`${"14px"}`}
                  desktopfontsize={`${"12px"}`}
                  desktopweight={`${"600"}`}
                  desktopcolor={`${"#000000"}`}
                  family={`${"'Sahitya'"}`}
                  color={`${"#441F0E"}`}
                />
              </ButtonPlacer1>
            </ImageAccompaniment>
          </ReviewContainer2>
          <ReviewContainer3>
            <Image fluid={props.image3} />
            <ImageAccompaniment>
              <Review3>{props.review3}</Review3>
              <ButtonPlacer1>
                <PinkButton
                  label="View Dress"
                  fontsize={`${"14px"}`}
                  weight={`${"bold"}`}
                  height={`${"22px"}`}
                  width={`${"88px"}`}
                  padding={`${"5px 0"}`}
                  shadow={`${"0px 4px 4px rgba(0, 0, 0, 0.25)"}`}
                  desktopwidth={`${"83px"}`}
                  desktoppadding={`${"5px"}`}
                  desktopheight={`${"14px"}`}
                  desktopfontsize={`${"12px"}`}
                  desktopweight={`${"600"}`}
                  desktopcolor={`${"#000000"}`}
                  family={`${"'Sahitya'"}`}
                  color={`${"#441F0E"}`}
                />
              </ButtonPlacer1>
            </ImageAccompaniment>
          </ReviewContainer3>
        </Container>
      </ReviewWrapper>
    </>
  );
};
export default BrideReview;
