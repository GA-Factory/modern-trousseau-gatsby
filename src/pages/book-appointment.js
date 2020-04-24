import React from 'react';
import Layout from '../global/Layout';
import NavBar from '../components/NavBar/NavBar';
import HeaderNavBar from '../components/HeaderNavBar/HeaderNavBar';
import Footer from '../components/Footer/Footer';
import LargeGrayButton from '../components/BookApptButtons/LargeGrayButton';


const AppointmentPage = () => (
  <Layout>
    <>
      <HeaderNavBar />
      <NavBar />
      <LargeGrayButton buttonText="Yes" clicked="true" />
      <Footer />
    </>
  </Layout>
);

export default AppointmentPage;
