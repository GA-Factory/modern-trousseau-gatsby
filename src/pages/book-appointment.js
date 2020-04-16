import React from "react";
import Layout from "../global/Layout";
import NavBar from "../components/NavBar/NavBar";
import HeaderNavBar from "../components/HeaderNavBar/HeaderNavBar";
import Footer from "../components/Footer/Footer";

import styled from "styled-components";

const AppointmentPage = () => (
  <Layout>
    <HeaderNavBar />
    <NavBar />
    <h1>book-appointment page. this sign is for testing purposes</h1>
    <Footer />
  </Layout>
);

export default AppointmentPage;
