import React from "react";
import styled from "styled-components";
import "../styles/fonts.css";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../global/Layout";
import NavBar from "../components/NavBar/NavBar";
import HeaderNavBar from "../components/HeaderNavBar/HeaderNavBar";
import Slider from "../components/Slider/Slider";
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
      allContentfulTestimonial(limit: 3) {
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
            comment
          }
          slug
        }
      }
      contentfulAsset(file: {fileName: {eq: "Charleston photo.png"}}) {
        fluid(maxWidth: 1000) {
          tracedSVG
          srcWebp
          srcSetWebp
          srcSet
          src
          base64
        }
      }
    }
  `);
  return (
    <Layout>
      <NavBar />
      <HeaderNavBar />
      {/* <Slider data={props.data} /> */}
      <Tagline
        headline="Classic Couture. Custom Fit."
        slogan="Where customization meets timeline meets budget."
      />
      <HowWeWork title="How We Work" />
      <OwnerQuote
        quote="The look on a bride's face when she finds her dress - that is priceless and incredibly rewarding."
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
        slug1={props.data.allContentfulTestimonial.nodes[0].slug}
        image2={props.data.allContentfulTestimonial.nodes[1].image.fluid}
        review2={props.data.allContentfulTestimonial.nodes[1].comment.comment}
        slug2={props.data.allContentfulTestimonial.nodes[1].slug}
        image3={props.data.allContentfulTestimonial.nodes[2].image.fluid}
        review3={props.data.allContentfulTestimonial.nodes[2].comment.comment}
        slug3={props.data.allContentfulTestimonial.nodes[2].slug}
      />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
