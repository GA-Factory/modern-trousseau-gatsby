import React from "react";
import styled from "styled-components";
import "../styles/fonts.css";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../global/Layout";
import NavBar from "../components/NavBar/NavBar";
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
    query contentfulCollection {
      contentfulCollection(collectionName: { eq: "Fall 2020" }) {
        collectionName
        gowns {
          name
          gownImage {
            file {
              fileName
              url
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <NavBar />
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
      <ComponentCollection title="props.data.contentfulCollection.collectionName"></ComponentCollection>
      {/* <BrideReview title="Fall 2020 Collection" /> */}
      {/* <ImageQuery fluid={data.contentfulGowns.gownImage.fluid} /> */}
      <Footer />
    </Layout>
  );
};

export default IndexPage;

// export const data = graphql`
// query contentfulGowns {
//   contentfulGowns(name: {eq: "Gracie"}) {
//     name
//     gownImage {
//       fluid {
//         src
//         srcSet
//         sizes
//         base64
//         srcSetWebp
//         srcWebp
//       }
//     }
//   }
// }
// `
