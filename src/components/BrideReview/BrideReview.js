import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Button from "../Button/Button";
import PinkButton from "../Button/Button";

const BridalReviews = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.backgroundGray};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 300px;
  }
`;

const Container = styled.div`
  display: flex;
  height: 240px;
  justify-content: space-around;
  background-color: ${props => props.theme.colors.backgroundGray};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 327px;
  }
`;

const ReviewContainer1 = styled.div`
  display: flex;
  height: 208.55px;
  width: 296px;
  justify-content: space-around;
  margin: 15px 5px 5px 5px;
  padding-left: 5px;
  background-color: ${props => props.theme.colors.backgroundGray};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 240px;
    width: 405px;
    justify-content: space-around;
    margin-top: 40px;
  }
`;

const ReviewContainer2 = styled.div`
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

const ReviewContainer3 = styled.div`
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

const GownImageMobile1 = styled.img`
  width: 148px;
  height: 208.55;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-block;
    width: 170px;
    height: 236.84px;
  }
`;

const GownImageScreen1 = styled.img`
  width: 120px;
  height: 150px;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-block;
    width: 190.72px;
    height: 236.85px;
  }
`;

const GownImageScreen2 = styled.img`
  width: 120px;
  height: 150px;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-block;
    width: 208px;
    height: 239px;
  }
`;

const ImageAccompaniment1 = styled.div`
  height: 208.55px;
  width: 296px;
  justify-content: space-around;
  background-color: ${props => props.theme.colors.backgroundGray};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 240px;
    width: 235px;
  }
`;

const ImageAccompaniment2 = styled.div`
  height: 208.55px;
  width: 296px;
  justify-content: space-around;
  background-color: ${props => props.theme.colors.backgroundGray};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 240px;
    width: 214.28px;
  }
`;

const ImageAccompaniment3 = styled.div`
  height: 208.55px;
  width: 296px;
  justify-content: space-around;
  background-color: ${props => props.theme.colors.backgroundGray};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 240px;
    width: 197px;
  }
`;

const MobileReview1 = styled.div`
  font-family: ${props => props.theme.fontStyles.Body3DesktopText.fontFamily};
  font-size: ${props => props.theme.fontStyles.Body3DesktopText.fontSize};
  text-align: center;
  margin: 0 0 18px 6px;
  position: relative;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const ScreenReview1 = styled.div`
  font-family: ${props => props.theme.fontStyles.Body3DesktopText.fontFamily};
  font-size: ${props => props.theme.fontStyles.Body3DesktopText.fontSize};
  text-align: center;
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-block;
    position: absolute;
    top: 35%;
    width: 189px;
  }
`;

const ScreenReview2 = styled.div`
  font-family: ${props => props.theme.fontStyles.Body3DesktopText.fontFamily};
  font-size: ${props => props.theme.fontStyles.Body3DesktopText.fontSize};
  text-align: center;
  position: absolute;
  top: 42%;
  margin-left: 2px;
  width: 193px;
`;

const ScreenReview3 = styled.div`
  font-family: ${props => props.theme.fontStyles.Body3DesktopText.fontFamily};
  font-size: ${props => props.theme.fontStyles.Body3DesktopText.fontSize};
  text-align: center;
  position: absolute;
  top: 35%;
  margin-left: 2px;
  width: 175px;
`;

const ViewDress = styled.div`
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

const ComponentCollection = ({ images }) => (
  <>
    <BridalReviews>
      <Container>
        <ReviewContainer1>
          <GownImageMobile1 src={images[0]}></GownImageMobile1>
          <ImageAccompaniment1>
            <MobileReview1>
              "From start to finish, my dress was high quality, hassle-free, and
              ready when promised.”<br></br> - Modern Trousseau Bride
            </MobileReview1>
            <ViewDress>
              <ScreenReview1>
                "They made me feel like a queen and I was extremely impressed
                with the quality of their gowns. Plus, I loved that they
                actually take your measurements and make it YOUR size."
              </ScreenReview1>
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
                </ViewDress>
          </ImageAccompaniment1>
          <MobileReviewSliderButton>&#10095;</MobileReviewSliderButton>
        </ReviewContainer1>
        <ReviewContainer2>
          <GownImageScreen1 src={images[1]}></GownImageScreen1>
          <ImageAccompaniment2>
            <ViewDress>
              <ScreenReview2>
                "From start to finish, my dress was high quality, hassle-free,
                and ready when promised.”
              </ScreenReview2>
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
            </ViewDress>
          </ImageAccompaniment2>
        </ReviewContainer2>
        <ReviewContainer3>
          <GownImageScreen2 src={images[2]}></GownImageScreen2>
          <ImageAccompaniment3>
            <ViewDress>
              <ScreenReview3>
                "Everything about the dress was perfect - the quality, fit, and
                overall look was impeccable. Thank you for your amazing customer
                service and beautiful product."
              </ScreenReview3>
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
            </ViewDress>
          </ImageAccompaniment3>
        </ReviewContainer3>
      </Container>
    </BridalReviews>
  </>
);

export default ComponentCollection;
