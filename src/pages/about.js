import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import NavBar from '../components/NavBar/NavBar';
import HeaderNavBar from '../components/HeaderNavBar/HeaderNavBar';
import Layout from '../global/Layout';
import AboutUs from '../components/AboutUs/AboutUs';
import Footer from '../components/Footer/Footer';

const About = ({ data }) => {
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
      <AboutUs data={data} />
      <Footer />
    </Layout>
  );
};

export default About;
