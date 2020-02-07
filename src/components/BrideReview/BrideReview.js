import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

const BridalReviews = styled.div`
/* display: flex;
flex-direction: column; */
width: 100%;
background-color: ${props => props.theme.colors.backgroundGray};
@media (min-width: ${props => props.theme.breakpoints.tablet}) {
  height: 300px;
  /* padding: 30px 10px 10px 10px; */
}
`;

const Container = styled.div`
  /* display: flex; */
  /* width: 100%; */
  height: 240px;
  /* padding: 20px 20px 20px 40px; */
  justify-content: space-around;
  background-color: ${props => props.theme.colors.backgroundGray};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 480px;
    /* padding: 10px 10px 10px 10px; */
  }
`;

const ReviewContainer1 = styled.div`
  /* display: flex; */
  /* width: 100%; */
  height: 208.55px;
  width: 296px;
  border: 1px solid black;
  /* padding: 20px 20px 20px 40px; */
  justify-content: space-around;
  background-color: ${props => props.theme.colors.backgroundGray};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 236.84px;
    /* padding: 10px 10px 10px 10px; */
  }
`;

const ReviewContainer2 = styled.div`
  /* display: flex; */
  /* width: 100%; */
  height: 200px;
  /* padding: 20px 20px 20px 40px; */
  justify-content: space-around;
  display: none;
  background-color: ${props => props.theme.colors.primaryPink};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 280px;
    /* padding: 10px 10px 10px 10px; */
  }
`;

const ReviewContainer3 = styled.div`
  /* display: flex; */
  /* width: 100%; */
  height: 200px;
  /* padding: 20px 20px 20px 40px; */
  justify-content: space-around;
  display: none;
  background-color: ${props => props.theme.colors.primaryPink};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 280px;
    /* padding: 10px 10px 10px 10px; */
  }
`;

const GownImageMobile1 = styled.img`
  width: 148px;
  height: 208.55;
  border: 1px solid black;
  /* z-index: 1; */
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
  /* display: none; */
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-top: 100px;
    display: inline-block;
    width: 190.72px;
    height: 236.85px;
  }
`;

const GownImageScreen2 = styled.img`
  width: 120px;
  height: 150px;
  border: 1px solid black;
  /* display: none; */
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-block;
    width: 208px;
    height: 239px;
  }
`;

// const Title = styled.p`
//   text-align: center;
//   font-weight: bold;
//   margin-bottom: 8px;
//   font-family: ${props => props.theme.fontStyles.h1Styles.fontStyle};
//   @media (min-width: ${props => props.theme.breakpoints.tablet}) {
//     font-family: ${props => props.theme.fontStyles.h3Styles.fontStyle};
//     font-size: ${props => props.theme.fontStyles.h3Styles.fontSize};
//     margin-top: 10px
//   }
// `;

const ComponentCollection = ({ images }) => (
  <>
    <BridalReviews>
      <Container>
        <ReviewContainer1>
            <GownImageMobile1 src={images[0]}></GownImageMobile1>
            {/* <p>fggdf</p> */}
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

            
            

