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




const IndexPage = props => (
  <Layout>
    {/* <NavBar /> */}
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
    {/* <BrideReview title="Fall 2020 Collection" /> */}
    <Footer />
  </Layout>
);

export default IndexPage;
