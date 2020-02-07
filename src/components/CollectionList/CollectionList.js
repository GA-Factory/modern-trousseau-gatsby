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
  height: 268px;
  width: 100%;
  margin-right: 0;
  background-color: rgb(246, 230, 222);
  /* border-top: 4px solid rgb(246, 230, 222);
  border-right: 195px solid rgb(246, 230, 222); */
  border: 1px solid green;
`;

const Title = styled.div``;

const SlideContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-around */
  height: 268px;
  width: 100%;
  background-color: rgb(246, 230, 222);
  margin: 8px 0 0 15px;
  border: 1px solid blue;
`;

const Button = styled.div`
  background-color: rgb(246, 230, 222);
  border: 0;
  margin: 0;
  font-size: 20px;
  height: 276px;
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
  margin-top: 100px;
  border: 1px solid black;
`;

const Slider = ({ property }) => {
  const { title, imga, imgb, labela, labelb, index } = property;
  return (
    <Slide id={`slide-${index}`}>
      <SlideContainer>
        <div className="image-1">
          <SlideImage src={imga} />
          <SlideText>{`${labela}`}</SlideText>
        </div>
        <div className="image-2">
          <SlideImage src={imgb} />
          <SlideText>{`${labelb}`}</SlideText>
        </div>
      </SlideContainer>
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
          {/* <div className="slide"> */}
            <Slider property={property} />
          {/* </div> */}
          <Button onClick={() => this.nextProperty()}>
            <ButtonIcon>&#10095;</ButtonIcon>
          </Button>
        </Card>
      </div>
    );
  }
}

export default CollectionList;
