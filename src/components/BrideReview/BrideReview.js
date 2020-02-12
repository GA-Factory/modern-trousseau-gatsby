import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Button from "../Button/Button";
import PinkButton from "../Button/Button";

// const BridalReviews = styled.div`
//   width: 100%;
//   background-color: ${props => props.theme.colors.backgroundGray};
//   @media (min-width: ${props => props.theme.breakpoints.tablet}) {
//     height: 300px;
//   }
// `;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.backgroundGray};
  border-bottom: 0.5px solid #0f1f2f;
  padding: 20px 15px;
  border: 1px solid black;
  @media (min-width: 600px) {
    border: 1px solid black;
    display: flex;
    height: 240px;
    width: 405px;
    justify-content: space-around;
    margin-top: 40px;
    height: 327px;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    border: 1px solid black;
    height: 327px;
  }
`;

const ReviewContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  width: 296px;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  background-color: ${props => props.theme.colors.backgroundGray};
  border: 1px solid blue;
  @media (min-width: 600px) {
    height: 240px;
    width: 405px;
    justify-content: space-around;
    margin-top: 0;
    border: 1px solid blue;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    height: 240px;
    width: 405px;
    justify-content: space-around;
    margin-top: 40px;
    border: 1px solid blue;
  }
`;

const ReviewContainerMidsize = styled.div`
  height: 200px;
  justify-content: space-around;
  display: none;
  background-color: ${props => props.theme.colors.backgroundGray};
  border: 1px solid green;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    height: 240px;
    width: 405px;
    justify-content: space-around;
    margin-top: 40px;
    border: 1px solid green;
  }
`;

const GownImage = styled.img`
  width: 80%;
  height: auto;
  border: 1px solid red; 
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-block;
    width: 189px;
    height: 238px;
    border: 1px solid red; 
  }
`;

const ImageAccompaniment = styled.div`
  height: 208px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.theme.colors.backgroundGray};
  border: 1px solid yellow;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 240px;
    width: 215px;    
    border: 1px solid yellow;
  }
`;

const ReviewMobile = styled.div`
  font-family: ${props => props.theme.fontStyles.Body3DesktopText.fontFamily};
  font-size: 16px;
  line-height: 15px;
  text-align: center;
  margin: 0 0 18px 6px;
  position: relative;
  border: 1px solid orange;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    top: 22%;
    margin-left: 2px;
    width: 189px;
    border: 1px solid orange;
  }
`;
const ReviewAuthor = styled.span`
  margin-top: 10px;
  display: inherit;
`;

const ReviewDesktop = styled.div`
  font-family: ${props => props.theme.fontStyles.Body3DesktopText.fontFamily};
  font-size: ${props => props.theme.fontStyles.Body3DesktopText.fontSize};
  text-align: center;
  position: absolute;
  top: 42%;
  margin-left: 2px;
  width: 189px;
  border: 1px solid yellowgreen;
`;

const ViewDressMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  border: 1px solid purple;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-top: 120px;
    border: 1px solid purple;
  }
`;

const ViewDressMidsize = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  border: 1px solid violet;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-top: 200px;
    border: 1px solid violet;
  }
`;

const MobileReviewSliderButton = styled.button`
  padding-bottom: 20px;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const ComponentCollection = ({ images }) => (
  <>
    {/* <BridalReviews> */}
      <Container>
        <ReviewContainerMobile>
          <GownImage src={images[0]}></GownImage>
          <ImageAccompaniment>
            <ReviewMobile>
              "From start to finish, my dress was high quality, hassle-free, and
              ready when promised.”<br></br> - Modern Trousseau Bride
            </ReviewMobile>
            <ViewDressMobile>
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
                </ViewDressMobile>
          </ImageAccompaniment>
          {/* <MobileReviewSliderButton>&#10095;</MobileReviewSliderButton> */}
        </ReviewContainerMobile>
        <ReviewContainerMidsize>
          <GownImage src={images[1]}></GownImage>
          <ImageAccompaniment>
            <ViewDressMidsize>
              <ReviewDesktop>
                "From start to finish, my dress was high quality, hassle-free,
                and ready when promised.”
              </ReviewDesktop>
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
            </ViewDressMidsize>
          </ImageAccompaniment>
        </ReviewContainerMidsize>
        {/* <ReviewContainerDesktop>
          <GownImage src={images[2]}></GownImage>
          <ImageAccompaniment>
            <ViewDressDesktop>
              <ReviewDesktop>
                "Everything about the dress was perfect - the quality, fit, and
                overall look was impeccable. Thank you for your amazing customer
                service and beautiful product."
              </ReviewDesktop>
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
            </ViewDressDesktop>
          </ImageAccompaniment>
        </ReviewContainerDesktop> */}
      </Container>
    {/* </BridalReviews> */}
  </>
);

export default ComponentCollection;
