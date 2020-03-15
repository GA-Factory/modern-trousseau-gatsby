import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const DesktopCard = styled.div`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding: 0 12px 0 0;
    background-color: #e5e5e5;
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

const Slide = styled.div`
  width: 100%;
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    height: 100%;
    padding-top: 12px;
    background-color: #e5e5e5;
  }
`;

const Button = styled.div`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    background-color: #e5e5e5;
    border: 0;
    margin: 0;
    margin-top: 24%;
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

const MobileGridContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
`

const MobileImageContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: ${props => props.theme.colors.primaryPink};
`;

const SliderA = ({ propertyA }) => {
  const { gownImage, name, index } = propertyA;
  return (
    <Slide id={`slide-${index}`}>
      <ImageContainer>
        <SlideImage fluid={gownImage.fluid.src} />
        <DesktopSlideText>{`${name}`}</DesktopSlideText>
      </ImageContainer>
      <p>{`${index}`}</p>
    </Slide>
  );
};

const SliderB = ({ propertyB }) => {
  const { gownImage, name, index } = propertyB;
  return (
    <Slide id={`slide-${index}`}>
      <ImageContainer>
        <SlideImage fluid={gownImage.fluid.src} />
        <DesktopSlideText>{`${name}`}</DesktopSlideText>
      </ImageContainer>
      <p>{`${index}`}</p>
    </Slide>
  );
};

const SliderC = ({ propertyC }) => {
  const { gownImage, name, index } = propertyC;
  return (
    <Slide id={`slide-${index}`}>
      <ImageContainer>
        <SlideImage fluid={gownImage.fluid.src} />
        <DesktopSlideText>{`${name}`}</DesktopSlideText>
      </ImageContainer>
      <p>{`${index}`}</p>
    </Slide>
  );
};

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

  render() {
    const { propertyA, propertyB, propertyC } = this.state;
    return (
      <div>
        <DesktopCard>
          <Button onClick={() => this.prevProperty()}>
            <ButtonIcon>&#10094;</ButtonIcon>
          </Button>
          <SliderA propertyA={propertyA} />
          <SliderB propertyB={propertyB} />
          <SliderC propertyC={propertyC} />
          <Button onClick={() => this.nextProperty()}>
            <ButtonIcon>&#10095;</ButtonIcon>
          </Button>
        </DesktopCard>

        <MobileCard>
          <MobileGridContainer>
          <MobileImageContainer>
            <MobileImage fluid={this.state.properties[0].gownImage}></MobileImage>
            <MobileText>{this.state.properties[0].name}</MobileText>
          </MobileImageContainer>
          <MobileImageContainer>
            <MobileImage fluid={this.state.properties[1].gownImage}></MobileImage>
            <MobileText>{this.state.properties[1].name}</MobileText>
          </MobileImageContainer>
          <MobileImageContainer>
            <MobileImage fluid={this.state.properties[2].gownImage}></MobileImage>
            <MobileText>{this.state.properties[2].name}</MobileText>
          </MobileImageContainer>
          <MobileImageContainer>
            <MobileImage fluid={this.state.properties[3].gownImage}></MobileImage>
            <MobileText>{this.state.properties[3].name}</MobileText>
          </MobileImageContainer>
          </MobileGridContainer>
        </MobileCard>
      </div>
    );
  }
}

export default CollectionList;