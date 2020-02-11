import React from "react";
import styled from "styled-components";
import "../styles/fonts.css";

import Layout from "../global/Layout";
import NavBar from "../components/NavBar/NavBar";
import Logo from "../components/FullLogo/Logo";
import Tagline from "../components/Tagline/tagline";
import HowWeWork from "../components/HowWeWork/howwework";
import OwnerQuote from "../components/owner-quote/owner-quote";
import BrideReview from "../components/BrideReview/BrideReview";
import Footer from "../components/Footer/Footer";

// import imageFile1 from "../../assets/images/bridal-review-1.png";
// import imageFile2 from "../../assets/images/bridal-review-2.jpeg";
// import imageFile3 from "../assets/images/bridal-review-3.jpeg";

// const images = [imageFile1, imageFile2, imageFile3];

const HeaderBox = styled.div`
  width: 100%;
  background-color: #ffffff;
  margin: 0 auto;
  padding: 20px 0 0;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
`;

const IndexPage = props => (
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
    {/* <BrideReview images={images} title="Fall 2020 Collection" /> */}
    <Footer />
  </Layout>
);

export default IndexPage;
