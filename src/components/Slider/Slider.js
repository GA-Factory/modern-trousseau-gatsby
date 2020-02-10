import React from "react";
import Image from "gatsby-image";
import styled from "styled-components";

const SliderImageContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto 25px auto;
  max-width: 800px;
  padding-top: 25px;
`;
const SliderImage = styled(Image)`
  display: block;
  flex-basis: 750px;
  margin: 25px auto;
  max-width: 750px;
  margin: 25px auto;
`;
const ChevronLeft = styled.svg`
  cursor: pointer;
  height: 20px;
  stroke-width: 1;
  transform: scaleX(-1);
  transition: 0.4s ease-in-out;
  width: 20px;
`;
const ChevronRight = styled.svg`
  cursor: pointer;
  height: 20px;
  stroke-width: 1;
  transform: rotate(-180deg) scaleX(-1);
  transition: 0.4s ease-in-out;
  width: 20px;
`;

export default class ProductSingle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      appear: true,
      currentIndex: 0,
      image: this.props.images.sliderImages.edges[0].node.childImageSharp.fluid,
      key: this.props.images.sliderImages.edges[0].node.id,
      lastIndex: this.props.images.sliderImages.edges.length
    };
  }

  toggleAppear = () => {
    this.setState({
      appear: !this.state.appear
    });
  };

  nextImage = () => {
    let newIndex;
    if (this.state.currentIndex === this.state.lastIndex - 1) {
      newIndex = 0;
    } else {
      newIndex = this.state.currentIndex + 1;
    }
    this.setState({
      currentIndex: newIndex,
      image: this.props.images.sliderImages.edges[newIndex].node.childImageSharp
        .fluid,
      key: this.props.images.sliderImages.edges[newIndex].node.id
    });
  };

  prevImage = () => {
    let newIndex;
    if (this.state.currentIndex === 0) {
      newIndex = this.state.lastIndex - 1;
    } else {
      newIndex = this.state.currentIndex - 1;
    }

    this.setState({
      currentIndex: newIndex,
      image: this.props.images.sliderImages.edges[newIndex].node.childImageSharp
        .fluid,
      key: this.props.images.sliderImages.edges[newIndex].node.id
    });
  };

  render() {
    return (
      <>
        {/* IMAGE */}
        <SliderImageContainer>
          {this.state.lastIndex > 1 && (
            <ChevronLeft
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentcolor"
              onClick={() => this.prevImage()}
            >
              <path d="M5 0.7071067811865475 L12.292893218813452 8 L5 15.292893218813452"></path>
            </ChevronLeft>
          )}
          <SliderImage fluid={this.state.image} key={this.state.key} />
          {this.state.lastIndex > 1 && (
            <ChevronRight
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentcolor"
              onClick={() => this.nextImage()}
            >
              <path d="M5 0.7071067811865475 L12.292893218813452 8 L5 15.292893218813452"></path>
            </ChevronRight>
          )}
        </SliderImageContainer>
      </>
    );
  }
}
