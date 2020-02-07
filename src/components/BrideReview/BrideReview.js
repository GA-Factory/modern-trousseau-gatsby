import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Button from "../Button/Button";

const BridalReviews = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.backgroundGray};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 300px;
  }
`;
//
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
  /* justify-content: space-around; */
  height: 208.55px;
  width: 296px;
  /* border: 1px solid black; */
  justify-content: space-around;
  margin: 15px 5px 5px 5px;
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
    /* border: 1px solid black; */
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
    /* border: 1px solid black; */
    height: 240px;
    width: 405px;
    justify-content: space-around;
    margin-top: 40px;
  }
`;

const GownImageMobile1 = styled.img`
  width: 148px;
  height: 208.55;
  /* border: 1px solid black; */
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-block;
    width: 170px;
    height: 236.84px;
  }
`;

const GownImageScreen1 = styled.img`
  width: 120px;
  height: 150px;
  /* border: 1px solid black; */
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-block;
    width: 190.72px;
    height: 236.85px;
  }
`;

const GownImageScreen2 = styled.img`
  width: 120px;
  height: 150px;
  /* border: 1px solid black; */
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-block;
    width: 208px;
    height: 239px;
  }
`;

const ImageAccompaniment1 = styled.div`
  height: 208.55px;
  width: 296px;
  /* border: 1px solid black; */
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
  /* border: 1px solid black; */
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
  /* border: 1px solid black; */
  justify-content: space-around;
  background-color: ${props => props.theme.colors.backgroundGray};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 240px;
    width: 197px;
  }
`;

const MobileReview1 = styled.div`
  font-style: ${props => props.theme.fontStyles.Body3DesktopText.fontStyle};
  font-size: ${props => props.theme.fontStyles.Body3DesktopText.fontSize};
  text-align: center;
  margin: 0 0 18px 6px;
  position: relative;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const ScreenReview1 = styled.div`
  font-style: ${props => props.theme.fontStyles.Body3DesktopText.fontStyle};
  font-size: ${props => props.theme.fontStyles.Body3DesktopText.fontSize};
  text-align: center;
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    /* text-align: center; */
    display: inline-block;
    margin-left: 16px;
    position: relative;
    width: 189px;
    border: 1px solid black;
  }
`;

const ScreenReview2 = styled.div`
  font-style: ${props => props.theme.fontStyles.Body3DesktopText.fontStyle};
  font-size: ${props => props.theme.fontStyles.Body3DesktopText.fontSize};
  /* font-size: 16px; */
  text-align: center;
  position: relative;
  margin-left: 6px;
  width: 193px;
  border: 1px solid black;
`;

const ScreenReview3 = styled.div`
  font-style: ${props => props.theme.fontStyles.Body3DesktopText.fontStyle};
  font-size: ${props => props.theme.fontStyles.Body3DesktopText.fontSize};
  /* font-size: 16px; */
  text-align: center;
  position: relative;
  margin-left: 6px;
  width: 175px;
  border: 1px solid black;
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
            <ScreenReview1>
              "They made me feel like a queen and I was extremely impressed with
              the quality of their gowns. Plus, I loved that they actually take
              your measurements and make it YOUR size."
            </ScreenReview1>
            <button
              style={{
                border: "1px solid black",
                display: "block",
                margin: "auto"
              }}
            >
              View Dress
            </button>
            <Button />
          </ImageAccompaniment1>
        </ReviewContainer1>
        <ReviewContainer2>
          <GownImageScreen1 src={images[1]}></GownImageScreen1>
          <ImageAccompaniment2>
            <ScreenReview2>
              "From start to finish, my dress was high quality, hassle-free, and
              ready when promised.” - Modern Trousseau Bride
            </ScreenReview2>
            <button
              style={{
                border: "1px solid black",
                display: "block",
                margin: "auto"
              }}
            >
              View Dress
            </button>
            {/* <Button></Button> */}
          </ImageAccompaniment2>
        </ReviewContainer2>
        <ReviewContainer3>
          <GownImageScreen2 src={images[2]}></GownImageScreen2>
          <ImageAccompaniment3>
            <ScreenReview3>
              "Everything about the dress was perfect - the quality, fit, and
              overall look was impeccable. Thank you for your amazing customer
              service and beautiful product."
            </ScreenReview3>
            <button
              style={{
                border: "1px solid black",
                display: "block",
                margin: "auto"
              }}
            >
              View Dress
            </button>
            {/* <Button></Button> */}
          </ImageAccompaniment3>
        </ReviewContainer3>
      </Container>
    </BridalReviews>
  </>
);

export default ComponentCollection;
