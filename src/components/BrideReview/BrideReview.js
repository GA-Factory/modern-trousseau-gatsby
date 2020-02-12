import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import PinkButton from "../Button/Button";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 100%;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.backgroundGray};
  border-bottom: 0.5px solid #0f1f2f;
  padding: 35px 40px;
  @media (min-width: 600px) {
    display: flex;
    height: auto;
    width: 100%;
    justify-content: space-around;
    margin-top: 40px;
    padding: 30px 20px;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
  }
`;

const GownImage = styled.img`
  width: 100%;
  height: auto;
  @media (min-width: 600px) {
    display: inline-block;
    width: 50%;
    height: 238px;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-block;
    width: 50%;
    height: 250px;
  }
`;

const ImageAccompaniment = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 600px) {
    height: auto;
    width: 50%;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: auto;
    width: 100%;
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
    width: 48%;
    justify-content: space-around;
    margin-top: 0;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    height: 250px;
    width: 33%;
  }
`;

const Review1 = styled.div`
  font-family: ${props => props.theme.fontStyles.Body3DesktopText.fontFamily};
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  margin: 0 0 8px 2px;
  position: relative;
  @media (min-width: 600px) {
    margin-left: 5px;
    width: 100%;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    top: 15%;
    width: 95%;
    height: auto;
    position: relative;
    top: 14px;
  }
`;

const ViewDress1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  @media (min-width: 600px) {
    margin-top: 0;
    flex-direction: column;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 50%;
    height: auto;
    margin-top: 35%;
  }
`;

const ButtonPlacer1 = styled.div`
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 600px) {
    display: flex;
    margin-top: 5%;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 5%;
  }
`;

const ReviewContainer2 = styled.div`
  display: none;
  @media (min-width: 600px) {
    display: flex;
    width: 100%;
    align-items: center;
    margin: 0;
    flex-direction: row;
    height: auto;
    width: 48%;
    justify-content: space-around;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    height: 250px;
    width: 33%;
  }
`;

const Review2 = styled.div`
  font-family: ${props => props.theme.fontStyles.Body3DesktopText.fontFamily};
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  margin: 0 0 8px 2px;
  position: relative;
  @media (min-width: 600px) {
    margin-left: 5px;
    width: 100%;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    top: 15%;
    width: 95%;
    height: auto;
    position: relative;
    top: 14px;
  }
`;

const ViewDress2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  @media (min-width: 600px) {
    margin-top: 0;
    flex-direction: column;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 50%;
    height: auto;
    margin-top: 35%;
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
  @media (min-width: 600px) {
    flex-direction: row;
    height: auto;
    width: 48%;
    justify-content: space-around;
    margin-top: 0;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    height: 250px;
    width: 33%;
  }
`;

const Review3 = styled.div`
  font-family: ${props => props.theme.fontStyles.Body3DesktopText.fontFamily};
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  margin: 0 0 8px 2px;
  position: relative;
  @media (min-width: 600px) {
    margin-left: 5px;
    width: 100%;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    top: 15%;
    width: 95%;
    height: auto;
    position: relative;
    top: 14px;
  }
`;

const ViewDress3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  @media (min-width: 600px) {
    margin-top: 0;
    flex-direction: column;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 50%;
    height: auto;
    margin-top: 35%;
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
`;

const ComponentCollection = ({ images }) => (
  <>
    <Container>
      <ReviewContainer1>
        <GownImage src={images[0]} />
        <ImageAccompaniment>
          <Review1>
            "From start to finish, my dress was high quality, hassle-free, and
            ready when promised.”<br></br> - Modern Trousseau Bride
          </Review1>
          <ViewDress1>
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
          </ViewDress1>
        </ImageAccompaniment>
      </ReviewContainer1>
      <ReviewContainer2>
        <GownImage src={images[0]} />
        <ImageAccompaniment>
          <Review2>
            "From start to finish, my dress was high quality, hassle-free, and
            ready when promised.”<br></br> - Modern Trousseau Bride
          </Review2>
          <ViewDress2>
            <ButtonPlacer2>
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
            </ButtonPlacer2>
          </ViewDress2>
        </ImageAccompaniment>
      </ReviewContainer2>
      <ReviewContainer3>
        <GownImage src={images[0]} />
        <ImageAccompaniment>
          <Review3>
            "From start to finish, my dress was high quality, hassle-free, and
            ready when promised.”<br></br> - Modern Trousseau Bride
          </Review3>
          <ViewDress3>
            <ButtonPlacer3>
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
            </ButtonPlacer3>
          </ViewDress3>
        </ImageAccompaniment>
      </ReviewContainer3>
    </Container>
  </>
);

export default ComponentCollection;
