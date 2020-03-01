import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const MobileCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  background-color: ${props => props.theme.colors.primaryPink};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const DesktopCard = styled.div`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    width: 67%;
    margin-left: 16.5%;
    margin-right: 16.5%;
    height: 100%;
  }
`;

const SliderAPlacer = styled.div`
  padding-left: 3.5%;
`

const Slide = styled.div`
  display: flex;
  height: 268px;
  padding-top: 12px;
  background-color: ${props => props.theme.colors.primaryPink};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
    display: none;
  }
`;

const Button = styled.div`
  background-color: ${props => props.theme.colors.primaryPink};
  border: 0;
  margin: 0;
  font-size: 20px;
  height: 276px;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const SlideImage = styled.img`
  height: 110%;
  width: 90%;
  margin: 3px;
  margin-bottom: 0;
  /* height: 100%; */
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MobileSlideText = styled.p`
  text-align: center;
  margin: 10px 0 0 0;
  font-family: ${props => props.theme.fontStyles.h3Styles.fontStyle};
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
`;

const ButtonIcon = styled.p`
  margin-top: 140px;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const DesktopImage = styled.img`
  width: 100%;
  height: 90%;
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    font-family: ${props => props.theme.fontStyles.h3Styles.fontStyle};
    font-size: 20px;
  }
`;

const DesktopText = styled.p`
  text-align: center;
  margin-top: 16px;
  font-weight: 800;
  font-family: ${props => props.theme.fontStyles.h3Styles.fontStyle};
  font-size: ${props => props.theme.fontStyles.h3Styles.fontSize};
`;

const DesktopImageContainer = styled.div`
  width: 100%;
  height: auto;
`;

const SliderA = ({ propertyA }) => {
  const { image, mobileLabel, index } = propertyA;
  return (
    <Slide id={`slide-${index}`}>
      <ImageContainer>
        <SlideImage src={image} />
        <MobileSlideText>{`${mobileLabel}`}</MobileSlideText>
      </ImageContainer>
    </Slide>
  );
};

const SliderB = ({ propertyB }) => {
  const { image, mobileLabel, index } = propertyB;
  return (
    <Slide id={`slide-${index}`}>
      <ImageContainer>
        <SlideImage src={image} />
        <MobileSlideText>{`${mobileLabel}`}</MobileSlideText>
      </ImageContainer>
    </Slide>
  );
};

class CollectionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: this.props.slideData,
      propertyA: this.props.slideData[0],
      propertyB: this.props.slideData[1]
    };
  }

  prevProperty = () => {
    if (this.state.propertyA.index > 0 && this.state.propertyB.index > 0) {
      const newIndexA = this.state.propertyA.index - 1;
      const newIndexB = this.state.propertyB.index - 1;
      this.setState({
        propertyA: this.props.slideData[newIndexA],
        propertyB: this.props.slideData[newIndexB]
      });
    }
    if (this.state.propertyA.index == 0 && this.state.propertyB != 0) {
      const newIndexA = this.props.slideData.length - 1;
      const newIndexB = this.state.propertyB.index - 1;
      this.setState({
        propertyA: this.props.slideData[newIndexA],
        propertyB: this.props.slideData[newIndexB]
      });
    }
    if (this.state.propertyA.index != 0 && this.state.propertyB.index == 0) {
      const newIndexA = this.state.propertyA.index - 1;
      const newIndexB = this.props.slideData.length - 1;
      this.setState({
        propertyA: this.props.slideData[newIndexA],
        propertyB: this.props.slideData[newIndexB]
      });
    }
  };

  nextProperty = () => {
    if (
      this.state.propertyA.index != this.props.slideData.length &&
      this.state.propertyB.index != this.props.slideData.length
    ) {
      const newIndexA = this.state.propertyA.index + 1;
      const newIndexB = this.state.propertyB.index + 1;
      this.setState({
        propertyA: this.props.slideData[newIndexA],
        propertyB: this.props.slideData[newIndexB]
      });
    }
    if (
      this.state.propertyA.index != this.props.slideData.length - 1 &&
      this.state.propertyB.index == this.props.slideData.length - 1
    ) {
      const newIndexA = this.state.propertyA.index + 1;
      const newIndexB = 0;
      this.setState({
        propertyA: this.props.slideData[newIndexA],
        propertyB: this.props.slideData[newIndexB]
      });
    }
    if (
      this.state.propertyA.index == this.props.slideData.length - 1 &&
      this.state.propertyB.index != this.props.slideData.length - 1
    ) {
      const newIndexA = 0;
      const newIndexB = this.state.propertyB.index + 1;
      this.setState({
        propertyA: this.props.slideData[newIndexA],
        propertyB: this.props.slideData[newIndexB]
      });
    }
  };

  render() {
    const { propertyA, propertyB } = this.state;
    return (
      <div>
        <MobileCard>
          <Button onClick={() => this.prevProperty()}>
            <ButtonIcon>&#10094;</ButtonIcon>
          </Button>
          <SliderAPlacer>  
          <SliderA propertyA={propertyA} />
          </SliderAPlacer>
          <SliderB propertyB={propertyB} />
          <Button onClick={() => this.nextProperty()}>
            <ButtonIcon>&#10095;</ButtonIcon>
          </Button>
        </MobileCard>
        <DesktopCard>
          <DesktopImageContainer>
            <DesktopImage src={this.state.properties[0].image}></DesktopImage>
            <DesktopText>{this.state.properties[0].desktopLabel}</DesktopText>
          </DesktopImageContainer>
          <DesktopImageContainer>
            <DesktopImage src={this.state.properties[1].image}></DesktopImage>
            <DesktopText>{this.state.properties[1].desktopLabel}</DesktopText>
          </DesktopImageContainer>
          <DesktopImageContainer>
            <DesktopImage src={this.state.properties[2].image}></DesktopImage>
            <DesktopText>{this.state.properties[2].desktopLabel}</DesktopText>
          </DesktopImageContainer>
        </DesktopCard>
      </div>
    );
  }
}

export default CollectionList;
