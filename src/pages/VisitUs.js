import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import NavBar from "../components/NavBar/NavBar";
import Layout from "../global/Layout";
import Footer from "../components/Footer/Footer";
import HeaderNavBar from "../components/HeaderNavBar/HeaderNavBar";
import StoreCollection from "../components/VisitUs-collection/VisitUs-collection";


const Main = styled.div`
  /* min-height: 100vh;
  display: block;
  position: relative;
  padding-bottom: 100px; */
  display: flex;
  flex-direction: column;
`;

const StoreContent = styled.div`
  /* padding-bottom: 5rem; */
  flex: 1 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: 10px auto;
`;

const Title = styled.div`
  margin: 20px;
  padding: 05px;
  font-family: Raleway;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  border: 1px solid #080808;
  background: rgba(68, 31, 14, 0.2);
`;

const Bottom = styled.div`
  /* position: absolute;
  bottom: 0;
  width: 100%; */
  flex-shrink: 0;
`;

const Nav = styled.nav`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const VisitUs = props => {
  const storeinfo = useStaticQuery(graphql`
    query storeData {
      allContentfulStore {
        nodes {
          about {
            about
          }
          city
          email
          hours {
            hours
          }
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
          phoneNumber
          state
          streetAddress {
            streetAddress
          }
          zip
          twitterHandle
        }
      }
    }
  `);

  return (
    <Layout>
      <Main>
        <NavBar />
        <Nav>
          <HeaderNavBar />
        </Nav>
        <Wrapper>
          <Title>MODERN TROUSSEAU RETAILERS</Title>
          <p>VISIT A FLAGSHIP</p>
        </Wrapper>
        <StoreContent>
          <StoreCollection data={props.data} />
        </StoreContent>
        <Bottom>
          <Footer />
        </Bottom>
      </Main>
    </Layout>
  );
};

export default VisitUs;
