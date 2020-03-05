import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const DesktopCard = styled.div`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding: 0 12px 0 0;
    background-color: #E5E5E5;
  }
`;

const MobileCard = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const SliderAPlacer = styled.div`
  padding-left: 3.5%;
`;

const Slide = styled.div`
    width: 100%;
    display: none;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    height: 100%;
    padding-top: 12px;
    background-color: #E5E5E5;
  }
`;

const Button = styled.div`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    background-color: #E5E5E5;
    border: 0;
    margin: 0;
    font-size: 36px;
    height: 100%;
  }
`;

const ImageContainer = styled.div`
    display: none;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
  }
`;

const SlideImage = styled.img`
    display: none;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    height: auto;
    width: 100%;
    margin-bottom: 0;
  }
`;

const DesktopSlideText = styled.p`
  text-align: center;
  margin: 10px 0 0 0;
  font-family: ${props => props.theme.fontStyles.h3Styles.fontStyle};
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
`;

const ButtonIcon = styled.p`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    margin-top: 1300%;
  }
`;

const MobileImage = styled.img`
    width: 94%;
    display: flex;
    background-color: ${props => props.theme.colors.primaryPink};
    font-family: ${props => props.theme.fontStyles.h3Styles.fontStyle};
    font-size: 20px;
    margin: 3%;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MobileText = styled.p`
  background-color: ${props => props.theme.colors.primaryPink};
  text-align: center;
  margin-top: 16px;
  font-weight: 800;
  font-family: ${props => props.theme.fontStyles.h3Styles.fontStyle};
  font-size: ${props => props.theme.fontStyles.h3Styles.fontSize};
`;

const MobileImageContainer = styled.div`
  width: 50%;
  height: auto;
  background-color: ${props => props.theme.colors.primaryPink};

`;

// const SliderA = ({ propertyA }) => {
//   const { image, mobileLabel, index } = propertyA;
//   return (
//     <Slide id={`slide-${index}`}>
//       <ImageContainer>
//         <SlideImage src={image} />
//         <DesktopSlideText>{`${mobileLabel}`}</DesktopSlideText>
//       </ImageContainer>
//     </Slide>
//   );
// };

// const SliderB = ({ propertyB }) => {
//   const { image, mobileLabel, index } = propertyB;
//   return (
//     <Slide id={`slide-${index}`}>
//       <ImageContainer>
//         <SlideImage src={image} />
//         <DesktopSlideText>{`${mobileLabel}`}</DesktopSlideText>
//       </ImageContainer>
//     </Slide>
//   );
// };

// const SliderC = ({ propertyC }) => {
//   const { image, mobileLabel, index } = propertyC;
//   return (
//     <Slide id={`slide-${index}`}>
//       <ImageContainer>
//         <SlideImage src={image} />
//         <DesktopSlideText>{`${mobileLabel}`}</DesktopSlideText>
//       </ImageContainer>
//     </Slide>
//   );
// };

class CollectionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: this.props.slideData,
      propertyA: this.props.slideData[0],
      propertyB: this.props.slideData[1],
      propertyC: this.props.slideData[2]
    };
  }

  prevProperty = () => {
    if (
      this.state.propertyA.index > 0 &&
      this.state.propertyB.index > 0 &&
      this.state.propertyC.index > 0
    ) {
      const newIndexA = this.state.propertyA.index - 1;
      const newIndexB = this.state.propertyB.index - 1;
      const newIndexC = this.state.propertyC.index - 1;
      this.setState({
        propertyA: this.props.slideData[newIndexA],
        propertyB: this.props.slideData[newIndexB],
        propertyC: this.props.slideData[newIndexC]
      });
    }
    if (
      this.state.propertyA.index == 0 &&
      this.state.propertyB.index != 0 &&
      this.state.propertyC.index != 0
    ) {
      const newIndexA = this.props.slideData.length - 1;
      const newIndexB = this.state.propertyB.index - 1;
      const newIndexC = this.state.propertyC.index - 1;
      this.setState({
        propertyA: this.props.slideData[newIndexA],
        propertyB: this.props.slideData[newIndexB],
        propertyC: this.props.slideData[newIndexC]
      });
    }
    if (
      this.state.propertyA.index != 0 &&
      this.state.propertyB.index == 0 &&
      this.state.propertyC.index != 0
    ) {
      const newIndexA = this.state.propertyA.index - 1;
      const newIndexB = this.props.slideData.length - 1;
      const newIndexC = this.state.propertyC.index - 1;
      this.setState({
        propertyA: this.props.slideData[newIndexA],
        propertyB: this.props.slideData[newIndexB],
        propertyC: this.props.slideData[newIndexC]
      });
    }
    if (
      this.state.propertyA.index != 0 &&
      this.state.propertyB.index != 0 &&
      this.state.propertyC.index == 0
    ) {
      const newIndexA = this.state.propertyA.index - 1;
      const newIndexB = this.state.propertyB.index - 1;
      const newIndexC = this.props.slideData.length - 1;
      this.setState({
        propertyA: this.props.slideData[newIndexA],
        propertyB: this.props.slideData[newIndexB],
        propertyC: this.props.slideData[newIndexC]
      });
    }
  };

  nextProperty = () => {
    if (
      this.state.propertyA.index != this.props.slideData.length &&
      this.state.propertyB.index != this.props.slideData.length &&
      this.state.propertyC.index != this.props.slideData.length
    ) {
      const newIndexA = this.state.propertyA.index + 1;
      const newIndexB = this.state.propertyB.index + 1;
      const newIndexC = this.state.propertyC.index + 1;
      this.setState({
        propertyA: this.props.slideData[newIndexA],
        propertyB: this.props.slideData[newIndexB],
        propertyC: this.props.slideData[newIndexC]
      });
    }
    if (
      this.state.propertyA.index != this.props.slideData.length - 1 &&
      this.state.propertyB.index != this.props.slideData.length - 1 &&
      this.state.propertyC.index == this.props.slideData.length - 1
    ) {
      const newIndexA = this.state.propertyA.index + 1;
      const newIndexB = this.state.propertyB.index + 1;
      const newIndexC = 0;
      this.setState({
        propertyA: this.props.slideData[newIndexA],
        propertyB: this.props.slideData[newIndexB],
        propertyC: this.props.slideData[newIndexC]
      });
    }
    if (
      this.state.propertyA.index != this.props.slideData.length - 1 &&
      this.state.propertyB.index == this.props.slideData.length - 1 &&
      this.state.propertyC.index != this.props.slideData.length - 1
    ) {
      const newIndexA = this.state.propertyA.index + 1;
      const newIndexB = 0;
      const newIndexC = this.state.propertyC.index + 1;
      this.setState({
        propertyA: this.props.slideData[newIndexA],
        propertyB: this.props.slideData[newIndexB],
        propertyC: this.props.slideData[newIndexC]
      });
    }
    if (
      this.state.propertyA.index == this.props.slideData.length - 1 &&
      this.state.propertyB.index != this.props.slideData.length - 1 &&
      this.state.propertyC.index != this.props.slideData.length - 1
    ) {
      const newIndexA = 0;
      const newIndexB = this.state.propertyB.index + 1;
      const newIndexC = this.state.propertyC.index + 1;
      this.setState({
        propertyA: this.props.slideData[newIndexA],
        propertyB: this.props.slideData[newIndexB],
        propertyC: this.props.slideData[newIndexC]
      });
    }
  };

<<<<<<< HEAD
  render(props) {
    const { propertyA, propertyB } = this.state;
    // const { nodes } = props;
    // console.log(nodes)
=======
  render() {
    const { propertyA, propertyB, propertyC } = this.state;
>>>>>>> develop
    return (
      <div>
        <DesktopCard>
          <Button onClick={() => this.prevProperty()}>
            <ButtonIcon>&#10094;</ButtonIcon>
          </Button>
          {/* <SliderA propertyA={propertyA} />
          <SliderB propertyB={propertyB} />
          <SliderC propertyC={propertyC} /> */}
          <Button onClick={() => this.nextProperty()}>
            <ButtonIcon>&#10095;</ButtonIcon>
          </Button>
        </DesktopCard>


        <MobileCard>
          <MobileImageContainer>
            {/* <MobileImage src={this.state.properties[0].image}></MobileImage>
            <MobileText>{this.state.properties[0].desktopLabel}</MobileText> */}
          </MobileImageContainer>
          <MobileImageContainer>
            {/* <MobileImage src={this.state.properties[1].image}></MobileImage>
            <MobileText>{this.state.properties[1].desktopLabel}</MobileText> */}
          </MobileImageContainer>
        </MobileCard>
      </div>
    );
  }
}

export default CollectionList;




// import React from "react";
// import ReactDOM from "react-dom";
// import styled from "styled-components";
// import { ThemeProvider } from "styled-components";

// const MobileCard = styled.div`
//   display: flex;
//   width: 375px;
//   justify-content: space-around;
//   background-color: ${props => props.theme.colors.primaryPink};
//   @media (min-width: ${props => props.theme.breakpoints.tablet}) {
//     display: none;
//   }
// `;

// const DesktopCard = styled.div`
//   display: none;
//   @media (min-width: ${props => props.theme.breakpoints.tablet}) {
//     display: flex;
//     width: 100%;
//     height: 440px;
//   }
// `;

// const Slide = styled.div`
//   display: flex;
//   height: 268px;
//   padding-top: 12px;
//   background-color: ${props => props.theme.colors.primaryPink};
//   @media (min-width: ${props => props.theme.breakpoints.tablet}) {
//     width: 100%;
//     display: none;
//   }
// `;

// const Title = styled.div`
//   display: none;
//   @media (min-width: ${props => props.theme.breakpoints.tablet}) {
//     display: inline-block;
//     margin-bottom: 8px;
//     font-weight: 800;
//     font-family: ${props => props.theme.fontStyles.h3Styles.fontStyle};
//     font-size: ${props => props.theme.fontStyles.h3Styles.fontSize};
//   }
// `;

// const Button = styled.div`
//   background-color: ${props => props.theme.colors.primaryPink};
//   border: 0;
//   margin: 0;
//   font-size: 20px;
//   height: 276px;
//   @media (min-width: ${props => props.theme.breakpoints.tablet}) {
//     display: none;
//   }
// `;

// const ImageContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   @media (min-width: ${props => props.theme.breakpoints.tablet}) {
//     display: none;
//   }
// `;

// const SlideImage = styled.img`
//   height: 220px;
//   width: 152px;
//   margin: 3px;
//   margin-bottom: 0;
//   @media (min-width: ${props => props.theme.breakpoints.tablet}) {
//     display: none;
//   }
// `;

// const MobileSlideText = styled.p`
//   text-align: center;
//   margin: 10px 0 0 0;
//   font-family: ${props => props.theme.fontStyles.h3Styles.fontStyle};
//   font-weight: ${props => props.theme.fontStyles.h5Styles.fontWeight};
//   font-size: 14px;
// `;

// const ButtonIcon = styled.p`
//   margin-top: 110px;
//   @media (min-width: ${props => props.theme.breakpoints.tablet}) {
//     display: none;
//   }
// `;

// const DesktopImage = styled.img`
//   width: 307px;
//   height: 421px;
//   display: none;
//   @media (min-width: ${props => props.theme.breakpoints.tablet}) {
//     display: flex;
//     font-family: ${props => props.theme.fontStyles.h3Styles.fontStyle};
//     font-size: ${props => props.theme.fontStyles.Body1DesktopText.fontSize};
//   }
// `;

// const DesktopText = styled.p`
//   text-align: center;
//   margin-top: 16px;
//   font-weight: 800;
//   font-family: ${props => props.theme.fontStyles.h3Styles.fontStyle};
//   font-size: ${props => props.theme.fontStyles.h3Styles.fontSize};
// `;

// const DesktopImageContainer = styled.div`
//   height: 440px;
// `;

// const SliderA = ({ propertyA }) => {
//   const { image, mobileLabel, index } = propertyA;
//   return (
//     <Slide id={`slide-${index}`}>
//       <ImageContainer>
//         <SlideImage src={image} />
//         <MobileSlideText>{`${mobileLabel}`}</MobileSlideText>
//       </ImageContainer>
//     </Slide>
//   );
// };

// const SliderB = ({ propertyB }) => {
//   const { image, mobileLabel, index } = propertyB;
//   return (
//     <Slide id={`slide-${index}`}>
//       <ImageContainer>
//         <SlideImage src={image} />
//         <MobileSlideText>{`${mobileLabel}`}</MobileSlideText>
//       </ImageContainer>
//     </Slide>
//   );
// };

// class CollectionList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       properties: this.props.slideData,
//       propertyA: this.props.slideData[0],
//       propertyB: this.props.slideData[1]
//     };
//   }

//   prevProperty = () => {
//     if (this.state.propertyA.index > 0 && this.state.propertyB.index > 0) {
//       const newIndexA = this.state.propertyA.index - 1;
//       const newIndexB = this.state.propertyB.index - 1;
//       this.setState({
//         propertyA: this.props.slideData[newIndexA],
//         propertyB: this.props.slideData[newIndexB]
//       });
//     }
//     if (this.state.propertyA.index == 0 && this.state.propertyB != 0) {
//       const newIndexA = this.props.slideData.length - 1;
//       const newIndexB = this.state.propertyB.index - 1;
//       this.setState({
//         propertyA: this.props.slideData[newIndexA],
//         propertyB: this.props.slideData[newIndexB]
//       });
//     }
//     if (this.state.propertyA.index != 0 && this.state.propertyB.index == 0) {
//       const newIndexA = this.state.propertyA.index - 1;
//       const newIndexB = this.props.slideData.length - 1;
//       this.setState({
//         propertyA: this.props.slideData[newIndexA],
//         propertyB: this.props.slideData[newIndexB]
//       });
//     }
//   };

//   nextProperty = () => {
//     if (
//       this.state.propertyA.index != this.props.slideData.length &&
//       this.state.propertyB.index != this.props.slideData.length
//     ) {
//       const newIndexA = this.state.propertyA.index + 1;
//       const newIndexB = this.state.propertyB.index + 1;
//       this.setState({
//         propertyA: this.props.slideData[newIndexA],
//         propertyB: this.props.slideData[newIndexB]
//       });
//     }
//     if (
//       this.state.propertyA.index != this.props.slideData.length - 1 &&
//       this.state.propertyB.index == this.props.slideData.length - 1
//     ) {
//       const newIndexA = this.state.propertyA.index + 1;
//       const newIndexB = 0;
//       this.setState({
//         propertyA: this.props.slideData[newIndexA],
//         propertyB: this.props.slideData[newIndexB]
//       });
//     }
//     if (
//       this.state.propertyA.index == this.props.slideData.length - 1 &&
//       this.state.propertyB.index != this.props.slideData.length - 1
//     ) {
//       const newIndexA = 0;
//       const newIndexB = this.state.propertyB.index + 1;
//       this.setState({
//         propertyA: this.props.slideData[newIndexA],
//         propertyB: this.props.slideData[newIndexB]
//       });
//     }
//   };

//   render() {
//     const { propertyA, propertyB } = this.state;
//     return (
//       <div>
//         <MobileCard>
//           <Button onClick={() => this.prevProperty()}>
//             <ButtonIcon>&#10094;</ButtonIcon>
//           </Button>
//           <SliderA propertyA={propertyA} />
//           <SliderB propertyB={propertyB} />
//           <Button onClick={() => this.nextProperty()}>
//             <ButtonIcon>&#10095;</ButtonIcon>
//           </Button>
//         </MobileCard>
//         <Title>Fall 2020 Collection</Title>
//         <DesktopCard>
//           <DesktopImageContainer>
//             <DesktopImage src={this.state.properties[0].image}></DesktopImage>
//             <DesktopText>{this.state.properties[0].desktopLabel}</DesktopText>
//           </DesktopImageContainer>
//           <DesktopImageContainer>
//             <DesktopImage src={this.state.properties[1].image}></DesktopImage>
//             <DesktopText>{this.state.properties[1].desktopLabel}</DesktopText>
//           </DesktopImageContainer>
//           <DesktopImageContainer>
//             <DesktopImage src={this.state.properties[2].image}></DesktopImage>
//             <DesktopText>{this.state.properties[2].desktopLabel}</DesktopText>
//           </DesktopImageContainer>
//         </DesktopCard>
//       </div>
//     );
//   }
// }

// export default CollectionList;
