import React from 'react';
import Layout from '../global/Layout';
import NavBar from '../components/NavBar/NavBar';
import HeaderNavBar from '../components/HeaderNavBar/HeaderNavBar';
import Footer from '../components/Footer/Footer';


const AppointmentPage = () => (
  <Layout>
    <>
      <HeaderNavBar />
      <NavBar />
      <Footer />
    </>
  </Layout>
);

export default AppointmentPage;
