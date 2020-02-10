// // import React from "react";
// // import { Slide } from "react-slideshow-image";
// // import "./Slider.css";
// import React from "react";
// import Image from "gatsby-image";
// import styled from "styled-components";

// // const slideImages = [slide_2, slide_3, slide_4];

// const SlideImageContainer = styled.div`
//   align-items: center;
//   display: flex;
//   justify-content: center;
//   margin: 0 auto 25px auto;
//   max-width: 800px;
//   padding-top: 25px;
// `;
// const SlideImage = styled(Image)`
//   display: block;
//   flex-basis: 750px;
//   margin: 25px auto;
//   max-width: 750px;
//   margin: 25px auto;
// `;
// // export default class ProductSingle extends React.Component {
// // const ChevronLeft = styled.svg`
// //   cursor: pointer;
// //   height: 20px;
// //   stroke-width: 1;
// //   transform: scaleX(-1);
// //   transition: 0.4s ease-in-out;
// //   width: 20px;
// // `;
// // const ChevronRight = styled.svg`
// //   cursor: pointer;
// //   height: 20px;
// //   stroke-width: 1;
// //   transform: rotate(-180deg) scaleX(-1);
// //   transition: 0.4s ease-in-out;
// //   width: 20px;
// // `;

// // constuctor(props) {
// //   super(props);
// //   this.state = {
// //     appear: true,
// //     currentIndex: 0,
// //     image: this.props.images.slideImages.edges[0].node.childImageSharp.fluid,
// //     key: this.props.images.slideImages.edges[0].node.id,
// //     lastIndex: this.props.images.slideImages.edges.length,
// //   }
// // }

// // const properties = {
// //   duration: 5000,
// //   transitionDuration: 500,
// //   infinite: true,
// //   indicators: true,
// //   arrows: true,
// //   onChange: (oldIndex, newIndex) => {
// //     console.log(`slide transition from ${oldIndex} to ${newIndex}`);
// //   }
// // };

// // const Slider = props => (
// //   <div className="slide-container">
// //     <Slide {...properties}>
// //       <div className="each-slide">
// //         <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
// //           <span>Slide 1</span>
// //         </div>
// //       </div>
// //       <div className="each-slide">
// //         <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
// //           <span>Slide 2</span>
// //         </div>
// //       </div>
// //       <div className="each-slide">
// //         <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
// //           <span>Slide 3</span>
// //         </div>
// //       </div>
// //     </Slide>
// //   </div>
// // );

// // }

// export default class ProductSingle extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       appear: true,
//       currentIndex: 0,
//       image: this.props.slideImages[0].image,
//       index: this.props.slideImages[0].index
//       // lastIndex: this.props.slideImages.length,
//     };
//   }

//   toggleAppear = () => {
//     this.setState({
//       appear: !this.state.appear
//     });
//   };

//   nextImage = () => {
//     let newIndex;
//     if (this.state.index === this.state.index - 1) {
//       newIndex = 0;
//     } else {
//       newIndex = this.state.currentIndex + 1;
//     }
//     this.setState({
//       currentIndex: newIndex,
//       image: this.props.slideImages[newIndex].image,
//       index: this.props.slideImages[newIndex].index
//     });
//   };

//   prevImage = () => {
//     let newIndex;
//     if (this.state.currentIndex === 0) {
//       newIndex = this.state.index - 1;
//     } else {
//       newIndex = this.state.currentIndex - 1;
//     }

//     this.setState({
//       currentIndex: newIndex,
//       image: this.props.slideImages[newIndex].image,
//       index: this.props.slideImages[newIndex].index
//     });
//   };

//   render() {
//     return (
//       <>
//         {/* IMAGE */}
//         <SlideImageContainer>
//           {this.state.lastIndex > 1}
//           <SlideImage fluid={this.state.image} index={this.state.index} />
//           {this.state.lastIndex > 1}
//         </SlideImageContainer>
//       </>
//     );
//   }
// }
