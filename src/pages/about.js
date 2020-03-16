import React from "react";
import NavBar from "../components/NavBar/NavBar";
import HeaderNavBar from "../components/HeaderNavBar/HeaderNavBar";
import Layout from "../global/Layout";
import Footer from "../components/Footer/Footer";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const About = props => {
  const aboutInfo = useStaticQuery(graphql`
    query AboutQuery {
      contentfulAsset(file: { fileName: { eq: "Callie.jpg" } }) {
        fluid {
          base64
          src
          srcSet
          srcSetWebp
          srcWebp
        }
        file {
          fileName
        }
      }
    }
  `);
  return (
    <Layout>
      <NavBar />
      <HeaderNavBar />
      <Footer />
    </Layout>
  );
};

export default About;
