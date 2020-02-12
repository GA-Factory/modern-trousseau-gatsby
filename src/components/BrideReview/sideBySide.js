import React from "react";
import styled from "styled-components";
import PinkButton from "../Button/Button";
import Icons from "../Icons/FAIcon";
import imageFile1 from "../../assets/images/bridal-review-1.png";
import imageFile2 from "../../assets/images/bridal-review-2.jpeg";
import imageFile3 from "../../assets/images/bridal-review-3.jpeg";
// const BridalReviews = styled.div`
//   width: 100%;
//   background-color: ${props => props.theme.colors.backgroundGray};
//   border-bottom: 0.5px solid #0f1f2f;
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
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 327px;
  }
`;
const ReviewContainerMobile = styled.div`
  display: flex;
  height: 208px;
  width: 296px;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  background-color: ${props => props.theme.colors.backgroundGray};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 240px;
    width: 405px;
    justify-content: space-around;
    margin-top: 0;
  }
`;
const ReviewContainerDesktop = styled.div`
  height: 200px;
  justify-content: space-around;
  display: none;
  background-color: ${props => props.theme.colors.backgroundGray};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    height: 240px;
    width: 405px;
    justify-content: space-around;
    margin-top: 40px;
  }
`;
const GownImage = styled.img`
  width: 148px;
  height: 208px;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-block;
    width: 189px;
    height: 238px;
  }
`;
const ImageAccompaniment = styled.div`
  height: 208px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.theme.colors.backgroundGray};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 240px;
    width: 215px;
  }
`;
const ReviewMobile = styled.div`
  font-family: ${props => props.theme.fontStyles.Body3DesktopText.fontFamily};
  font-size: 11px;
  line-height: 15px;
  text-align: center;
  margin: 0 0 18px 6px;
  position: relative;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    top: 22%;
    margin-left: 2px;
    width: 189px;
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
`;
const ViewDressMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-top: 120px;
  }
`;
const ViewDressDesktop = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-top: 200px;
  }
`;
const MobileReviewSliderButton = styled.button`
  padding-bottom: 20px;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;
const ComponentCollection = props => (
  <>
    {/* <BridalReviews> */}
    <Container>
      <ReviewContainerMobile>
        <GownImage src={imageFile1}></GownImage>
        <ImageAccompaniment>
          <ReviewMobile>
            "From start to finish, my dress was high quality, hassle-free, and
            ready when promised."
            <br />
            <ReviewAuthor> - Modern Trousseau Bride</ReviewAuthor>
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
      </ReviewContainerMobile>
      <ReviewContainerMobile>
        <GownImage src={imageFile1}></GownImage>
        <ImageAccompaniment>
          <ReviewMobile>
            "From start to finish, my dress was high quality, hassle-free, and
            ready when promised."
            <br />
            <ReviewAuthor> - Modern Trousseau Bride</ReviewAuthor>
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
      </ReviewContainerMobile>
      {/* <ReviewContainerDesktop>
        <GownImage src={imageFile2}></GownImage>
        <ImageAccompaniment>
          <ViewDressDesktop>
            <ReviewDesktop>
              "From start to finish, my dress was high quality, hassle-free, and
              ready when promised."
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
      </ReviewContainerDesktop>
      <ReviewContainerDesktop>
        <GownImage src={imageFile3}></GownImage>
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