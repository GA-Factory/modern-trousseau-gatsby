import React from "react";
import styled from "styled-components";
import "../styles/fonts.css";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../global/Layout";
import NavBar from "../components/NavBar/NavBar";
import HeaderNavBar from "../components/HeaderNavBar/HeaderNavBar";
// import Slider from "../components/Slider/Slider";
import Tagline from "../components/Tagline/tagline";
import HowWeWork from "../components/HowWeWork/howwework";
import OwnerQuote from "../components/owner-quote/owner-quote";
import ComponentCollection from "../components/component-collection/ComponentCollection";
import BrideReview from "../components/BrideReview/BrideReview";
import Footer from "../components/Footer/Footer";

const ImageQuery = styled(Img)`
  display: block;
  width: 50%;
  height: 600px;
`;

const IndexPage = props => {
  const collectioninfo = useStaticQuery(graphql`
    query contentfulGowns {
      contentfulCollection(collectionName: { eq: "Fall 2020" }) {
        collectionName
        gowns {
          gownImage {
            fluid {
              src
              srcSet
              srcSetWebp
              srcWebp
              tracedSVG
            }
          }
        }
      }
      allContentfulTestimonial {
        nodes {
          image {
            fluid {
              base64
              src
              srcSet
              srcSetWebp
              srcWebp
              tracedSVG
            }
          }
          comment {
            id
            comment
          }
        }
      }
    }
  `);
  return (
    <Layout>
      {/* <NavBar /> */}
      <HeaderNavBar />
      {/* <Slider data={props.data} /> */}
      <Tagline
        headline="Classic Couture. Custom Fit."
        slogan="Where customization meets timeline meets budget."
      />
      <HowWeWork title="How We Work" />
      <OwnerQuote
        quote="The look on a bride's face when she finds her dress - that is priceless
  and incredibly rewarding."
        name="Callie Tein"
        role="Designer"
      />
      <ComponentCollection
        title={props.data.contentfulCollection.collectionName}
        data={props.data}
      ></ComponentCollection>
      <BrideReview
        data={props.data}
        image1={props.data.allContentfulTestimonial.nodes[0].image.fluid}
        review1={props.data.allContentfulTestimonial.nodes[0].comment.comment}
        image2={props.data.allContentfulTestimonial.nodes[1].image.fluid}
        review2={props.data.allContentfulTestimonial.nodes[1].comment.comment}
        image3={props.data.allContentfulTestimonial.nodes[2].image.fluid}
        review3={props.data.allContentfulTestimonial.nodes[2].comment.comment}
      />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
