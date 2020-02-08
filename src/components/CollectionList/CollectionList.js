import React from "react";
import ReactDOM from "react-dom";

import styled from "styled-components";

const Card = styled.div`
  display: flex;
  width: 375px;
  justify-content: space-around;
  background-color: ${props => props.theme.colors.primaryPink};
  border: 1px solid red;
`;

const Slide = styled.div`
  display: flex;
  height: 268px;
  padding-top: 8px;
  background-color: ${props => props.theme.colors.primaryPink};
  border: 1px solid green;
`;

const Title = styled.div``;

const Button = styled.div`
  background-color: ${props => props.theme.colors.primaryPink};
  border: 0;
  margin: 0;
  font-size: 20px;
  height: 276px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SlideImage = styled.img`
  height: 220px;
  width: 152px;
  margin: 3px;
  margin-bottom: 0;
`;

const SlideText = styled.p`
  text-align: center;
  margin: 0;
  font-family: ${props => props.theme.fontStyles.Body1MobileText.fontFamily};
  font-style: ${props => props.theme.fontStyles.Body1MobileText.fontStyle};
  font-weight: ${props => props.theme.fontStyles.h5Styles.fontWeight};
  font-size: 14px;
  border: 1px solid black;
`;

const ButtonIcon = styled.p`
  margin-top: 110px;
  border: 1px solid black;
`;

const SliderA = ({ propertyA }) => {
  const { image, label, index } = propertyA;
  return (
    <Slide id={`slide-${index}`}>
      <ImageContainer>
        <SlideImage src={image} />
        <SlideText>{`${label}`}</SlideText>
      </ImageContainer>
    </Slide>
  );
};

const SliderB = ({ propertyB }) => {
  const { image, label, index } = propertyB;
  return (
    <Slide id={`slide-${index}`}>
      <ImageContainer>
        <SlideImage src={image} />
        <SlideText>{`${label}`}</SlideText>
      </ImageContainer>
    </Slide>
  );
};

class CollectionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      console.log(this.state.propertyA.index);
      console.log(this.state.propertyB.index);
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
      console.log(this.state.propertyA.index);
      console.log(this.state.propertyB.index);
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
        <Card>
          <Button onClick={() => this.prevProperty()}>
            <ButtonIcon>&#10094;</ButtonIcon>
          </Button>
          <SliderA propertyA={propertyA} />
          <SliderB propertyB={propertyB} />
          <Button onClick={() => this.nextProperty()}>
            <ButtonIcon>&#10095;</ButtonIcon>
          </Button>
        </Card>
      </div>
    );
  }
}

export default CollectionList;
