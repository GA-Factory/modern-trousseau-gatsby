import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import Dots from "./Dots";
import HeroCaptions from "../Captions/herocaptions"

const SliderImageContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto 25px auto;
  max-width: 800px;
  padding-top: 25px;
`;
const SliderImage = styled(Img)`
  display: block;
  flex-basis: 750px;
  margin: 25px auto;
  max-width: 100%;
  height: 350px;
  z-index: -1;
  position: absolute;
`;

const CaptionContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 100%;
  text-align: left;
  z-index: 10;
  position: absolute;
  left: 319px;
  top: 565px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: 750px;
    width: 100%;
    height: 80px;
  }
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
const DotContainer = styled.section`
  display: flex;
  border: 1px solid black;
  height: 30px;
  justify-content: space-between;
  max-width: 800px;
  margin: 10px auto;
`;

const CaptionTitle = styled.h4`
  font-family:'Raleway';
  font-style: normal;
  font-weight: bolder;
  font-size: 18px;
  line-height: 21px;
  color: #fff;
  z-index: 10;
  position: absolute;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    ${props => props.theme.fontStyles.h4Styles}
  }
`

export default class ProductSingle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      appear: true,
      currentIndex: 0,
      description: this.props.data.allContentfulCarousel.nodes[0].slideDescription,
      title: this.props.data.allContentfulCarousel.nodes[0].slideTitle,
      image: this.props.data.allContentfulCarousel.nodes[0].slideImage.fluid,
      key: this.props.data.allContentfulCarousel.nodes[0].id,
      lastIndex: this.props.data.allContentfulCarousel.nodes.length,
      imageArr: this.props.data.allContentfulCarousel.nodes
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
      image: this.props.data.allContentfulCarousel.nodes[newIndex].slideImage.fluid,
      description: this.props.data.allContentfulCarousel.nodes[newIndex].slideDescription,
      title: this.props.data.allContentfulCarousel.nodes[newIndex].slideTitle,
      key: this.props.data.allContentfulCarousel.nodes[newIndex].id
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
      image: this.props.data.allContentfulCarousel.nodes[newIndex].slideImage.fluid,
      description: this.props.data.allContentfulCarousel.nodes[newIndex].slideDescription,
      title: this.props.data.allContentfulCarousel.nodes[newIndex].slideTitle,
      key: this.props.data.allContentfulCarousel.nodes[newIndex].id
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
          <HeroCaptions title={this.state.title} description={this.state.description} />
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
        <DotContainer>
          {console.log(this.state.imageArr)}
          {this.state.imageArr.map((img, index) => {
            <>
              <div>This works</div>
              <Dots
                imageIndex={this.state.currentIndex}
                dotIndex={index}
                key={this.state.key}
                activeImage={img}
              />
              ;
            </>;
          })}
        </DotContainer>
      </>
    );
  }
}
