import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import GownHeader from "../GownHeader/GownHeader";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

let icon = faSlidersH;
library.add(faSlidersH);

const DesktopCard = styled.div`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding: 0 12px;
    background-color: #e5e5e5;
  }
`;

const MobileCard = styled.div`
  /* display: flex; */
  /* flex-direction */
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

const MobileSliderButtons = styled.div`
margin-left: auto;
margin-right: auto;
display: flex;
padding: 0 30%;
background-color: ${props => props.theme.colors.primaryPink};
`

const MobileButton = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.primaryPink};
  border: 0;
  margin: 0;
  font-size: 48px;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
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
`;

const ButtonIcon = styled.p`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
  }
`;

const MobileButtonIcon = styled.p`
  display: flex;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const MobileCollectionTitle = styled.p`
  font-weight: 800;
  display: flex;
  margin-top: 0;
  padding-left: 2.5%;
  background-color: white;
  border-top: 8px solid #fae5dc;
  background-color: ${props => props.theme.colors.primaryPink};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const CollectionDescription = styled.p`
  font-weight: 500;
  padding-left: 2.5%;
  border-top: 5px solid #fae5dc;
  background-color: ${props => props.theme.colors.primaryPink};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    border-top: 5px solid #e5e5e5;
    background-color: ${props => props.theme.colors.backgroundGray};
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
  text-transform: uppercase;
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
        <SlideImage src={gownImage.fluid.src} />
        <DesktopSlideText>{`${name}`}</DesktopSlideText>
      </ImageContainer>
    </Slide>
  );
};

const SliderB = ({ propertyB }) => {
  const { gownImage, name, index } = propertyB;
  return (
    <Slide id={`slide-${index}`}>
      <ImageContainer>
        <SlideImage src={gownImage.fluid.src} />
        <DesktopSlideText>{`${name}`}</DesktopSlideText>
      </ImageContainer>
    </Slide>
  );
};

const SliderC = ({ propertyC }) => {
  const { gownImage, name, index } = propertyC;
  return (
    <Slide id={`slide-${index}`}>
      <ImageContainer>
        <SlideImage src={gownImage.fluid.src} />
        <DesktopSlideText>{`${name}`}</DesktopSlideText>
      </ImageContainer>
    </Slide>
  );
};

class CollectionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileIndexA: 0,
      mobileIndexB: 1,
      mobileEdges: this.props.edges,
      propertyA: this.props.slideData[0],
      propertyB: this.props.slideData[1],
      propertyC: this.props.slideData[2],
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

  mobileCollectionSliderPrev = () => {
    if (
      this.state.mobileIndexA != 0 &&
      this.state.mobileIndexB != 0
     ) 
    this.setState({
      mobileIndexA: this.state.mobileIndexA - 1,
      mobileIndexB: this.state.mobileIndexB - 1
    })
    if (
      this.state.mobileIndexA == 0 &&
      this.state.mobileIndexB != 0
     )
     this.setState({
      mobileIndexA: this.props.edges.length - 1,
      mobileIndexB: this.state.mobileIndexB - 1
    })
    if (
      this.state.mobileIndexA != 0 &&
      this.state.mobileIndexB == 0
     )
     this.setState({
      mobileIndexA: this.state.mobileIndexA - 1,
      mobileIndexB: this.props.edges.length - 1
    })
  }

  mobileCollectionSliderNext = () => {
    if (
      this.state.mobileIndexA != this.props.edges.length - 1 &&
      this.state.mobileIndexB != this.props.edges.length - 1
     ) 
    this.setState({
      mobileIndexA: this.state.mobileIndexA + 1,
      mobileIndexB: this.state.mobileIndexB + 1
    })
    if (
      this.state.mobileIndexA != this.props.edges.length - 1 &&
      this.state.mobileIndexB == this.props.edges.length - 1
     )
     this.setState({
      mobileIndexA: this.state.mobileIndexA + 1,
      mobileIndexB: 0
    })
    if (
      this.state.mobileIndexA == this.props.edges.length - 1 &&
      this.state.mobileIndexB != this.props.edges.length - 1
     )
     this.setState({
      mobileIndexA: 0,
      mobileIndexB: this.state.mobileIndexB + 1
    })
  }

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
        <MobileSliderButtons>
        <MobileButton onClick={() => this.mobileCollectionSliderPrev()}>
          <MobileButtonIcon>&#10094;</MobileButtonIcon>
        </MobileButton>
        <GownHeader icon={icon} open={open} />
        <MobileButton onClick={() => this.mobileCollectionSliderNext()}>
          <MobileButtonIcon>&#10095;</MobileButtonIcon>
        </MobileButton>
        </MobileSliderButtons>
            <TextContainer>
          <Link to="/collection">
          <MobileCollectionTitle>
              {this.state.mobileEdges[this.state.mobileIndexA].collectionName}
          </MobileCollectionTitle>
        </Link>
        <CollectionDescription>
          A description of the theme of the gowns in the collection
        </CollectionDescription>
            </TextContainer>
          <MobileGridContainer>
          <MobileImageContainer>
          <MobileImage src={this.state.mobileEdges[this.state.mobileIndexA].gowns[0].gownImage.fluid.src}></MobileImage>
            <MobileText>{this.state.mobileEdges[this.state.mobileIndexA].gowns[0].name}</MobileText>
          </MobileImageContainer>
          <MobileImageContainer>
            <MobileImage src={this.state.mobileEdges[this.state.mobileIndexA].gowns[1].gownImage.fluid.src}></MobileImage>
            <MobileText>{this.state.mobileEdges[this.state.mobileIndexA].gowns[1].name}</MobileText>
          </MobileImageContainer>
          <MobileImageContainer>
            <MobileImage src={this.state.mobileEdges[this.state.mobileIndexA].gowns[2].gownImage.fluid.src}></MobileImage>
            <MobileText>{this.state.mobileEdges[this.state.mobileIndexA].gowns[2].name}</MobileText>
          </MobileImageContainer>
          <MobileImageContainer>
            <MobileImage src={this.state.mobileEdges[this.state.mobileIndexA].gowns[3].gownImage.fluid.src}></MobileImage>
            <MobileText>{this.state.mobileEdges[this.state.mobileIndexA].gowns[3].name}</MobileText>
          </MobileImageContainer>
          </MobileGridContainer>
          <TextContainer>
          <Link to="/collection">
          <MobileCollectionTitle>
          {this.state.mobileEdges[this.state.mobileIndexB].collectionName}
          </MobileCollectionTitle>
        </Link>
        <CollectionDescription>
          A description of the theme of the gowns in the collection
        </CollectionDescription>
            </TextContainer>
          <MobileGridContainer>
          <MobileImageContainer>
            <MobileImage src={this.state.mobileEdges[this.state.mobileIndexB].gowns[0].gownImage.fluid.src}></MobileImage>
            <MobileText>{this.state.mobileEdges[this.state.mobileIndexB].gowns[0].name}</MobileText>
          </MobileImageContainer>
          <MobileImageContainer>
            <MobileImage src={this.state.mobileEdges[this.state.mobileIndexB].gowns[1].gownImage.fluid.src}></MobileImage>
            <MobileText>{this.state.mobileEdges[this.state.mobileIndexB].gowns[1].name}</MobileText>
          </MobileImageContainer>
          <MobileImageContainer>
            <MobileImage src={this.state.mobileEdges[this.state.mobileIndexB].gowns[2].gownImage.fluid.src}></MobileImage>
            <MobileText>{this.state.mobileEdges[this.state.mobileIndexB].gowns[2].name}</MobileText>
          </MobileImageContainer>
          <MobileImageContainer>
            <MobileImage src={this.state.mobileEdges[this.state.mobileIndexB].gowns[3].gownImage.fluid.src}></MobileImage>
            <MobileText>{this.state.mobileEdges[this.state.mobileIndexB].gowns[3].name}</MobileText>
          </MobileImageContainer>
          </MobileGridContainer>
        </MobileCard>
      </div>
    );
  }
}

export default CollectionList;