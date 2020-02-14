import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import Layout from '../global/Layout';
import Image from '../components/Image';
import Logo from '../components/FullLogo/Logo';

// const Page = styled.div`
//   width: 100%;
//   height: 100vh;
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const Heading = styled.h1`
//   font-size: 24px;
//   color: #555;
//   margin-top: 60px;
// `;

// const Label = styled.p`
//   font-size: 14px;
//   color: #aaa;
//   margin-top: 12px;
//   letter-spacing: 10px;
//   text-transform: uppercase;
// `;

const IndexPage = props => (
  <Layout>
    <Page>
      <Image />
      <Logo />
      <Heading>GatsbyJS + Storybook: YAY</Heading>
      <Label>It Works</Label>
    </Page>
  </Layout>
);

export default IndexPage;

export const sliderImageQuery = graphql`
  query {
    sliderImages: allFile(filter: { extension: { eq: "jpg" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 800, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
