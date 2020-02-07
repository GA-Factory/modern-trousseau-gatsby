import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Button from '../Button/Button'

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
    height: 400px;
  }
`;

const ReviewContainer1 = styled.div`
  display: flex;
  height: 208.55px;
  width: 296px;
  border: 1px solid black;
  justify-content: space-around;
  background-color: ${props => props.theme.colors.backgroundGray};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 240px;
    width: 405px;
  }
`;

const ReviewContainer2 = styled.div`
  height: 200px;
  justify-content: space-around;
  display: none;
  background-color: ${props => props.theme.colors.backgroundGray};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-block;
    border: 1px solid black;
    height: 240px;
    width: 405px;
  }
`;

const ReviewContainer3 = styled.div`
  height: 200px;
  justify-content: space-around;
  display: none;
  background-color: ${props => props.theme.colors.backgroundGray};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-block;
    border: 1px solid black;
    height: 240px;
    width: 405px;
  }
`;

const GownImageMobile1 = styled.img`
  width: 148px;
  height: 208.55;
  border: 1px solid black;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-block;
    width: 170px;
    height: 236.84px;
  }
`;

const GownImageScreen1 = styled.img`
  width: 120px;
  height: 150px;
  border: 1px solid black;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-block;
    width: 190.72px;
    height: 236.85px;
  }
`;

const GownImageScreen2 = styled.img`
  width: 120px;
  height: 150px;
  border: 1px solid black;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-block;
    width: 208px;
    height: 239px;
  }
`;

const ImageAccompaniment = styled.div`
  height: 208.55px;
  width: 296px;
  border: 1px solid black;
  justify-content: space-around;
  background-color: ${props => props.theme.colors.backgroundGray};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 240px;
    width: 405px;
  }
`;

const Review1 = styled.div`


`

const ComponentCollection = ({ images }) => (
  <>
    <BridalReviews>
      <Container>
        <ReviewContainer1>
            <GownImageMobile1 src={images[0]}></GownImageMobile1>
            <ImageAccompaniment>
            <Review1>From start to finish, my dress was high quality, hassle-free, and ready when promised.” - Modern Trousseau Bride</Review1>
            <button style={{
                border: '1px solid black'
            }}>View Dress</button>
            {/* <Button></Button> */}
            </ImageAccompaniment>
        </ReviewContainer1>
        <ReviewContainer2>
            <GownImageScreen1 src={images[1]}></GownImageScreen1>
        </ReviewContainer2>
        <ReviewContainer3>
            <GownImageScreen2 src={images[2]}></GownImageScreen2>
        </ReviewContainer3>
      </Container>
    </BridalReviews>
  </>
);

export default ComponentCollection;

            
            

