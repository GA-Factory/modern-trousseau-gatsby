import React from "react";
import ReactDOM from "react-dom";

import styled from "styled-components";

const Card = styled.div`
  display: flex;
  width: 375px;
  justify-content: space-around;
  background-color: rgb(246, 230, 222);
  border: 1px solid red;
`;

const Slide = styled.div`
  display: flex;
  height: 268px;
  padding-top: 8px;
  background-color: rgb(246, 230, 222);
  border: 1px solid green;
`;

const Title = styled.div``;

const Button = styled.div`
  background-color: rgb(246, 230, 222);
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
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: bold;
  border: 1px solid black;
`;

const ButtonIcon = styled.p`
  margin-top: 110px;
  border: 1px solid black;
`;

const Slider = ({ property }) => {
  const { image, label, index } = property;
  return (
    <Slide id={`slide-${index}`}>
      <ImageContainer>
        <SlideImage src={image} />
        <SlideText>{`${label}`}</SlideText>
      </ImageContainer>
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
      properties: this.props.slideData,
      property: this.props.slideData[0]
    };
  }

  prevProperty = () => {
    if (this.state.property.index >= 0) {
      const newIndex = this.state.property.index - 1;
      this.setState({
        property: this.props.slideData[newIndex]
      });
    }
    if (this.state.property.index == 0) {
      const newIndex = this.props.slideData.length - 1;
      this.setState({
        property: this.props.slideData[newIndex]
      });
    }
  };

  nextProperty = () => {
    if (this.state.property.index >= 0) {
      const newIndex = this.state.property.index + 1;
      this.setState({
        property: this.props.slideData[newIndex]
      });
    }
    if (this.state.property.index == this.props.slideData.length - 1) {
      const newIndex = 0;
      this.setState({
        property: this.props.slideData[newIndex]
      });
    }
  };

  render() {
    const { properties, property } = this.state;
    return (
      <div>
        <Card>
          <Button onClick={() => this.prevProperty()}>
            <ButtonIcon>&#10094;</ButtonIcon>
          </Button>
          <Slider property={property} />
          <Button onClick={() => this.nextProperty()}>
            <ButtonIcon>&#10095;</ButtonIcon>
          </Button>
        </Card>
      </div>
    );
  }
}

export default CollectionList;
