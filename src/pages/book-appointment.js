import React from 'react';
import Layout from '../global/Layout';
import NavBar from '../components/NavBar/NavBar';
import HeaderNavBar from '../components/HeaderNavBar/HeaderNavBar';
import Footer from '../components/Footer/Footer';
import GrayButton from '../components/BookApptButtons/GrayButton';


const AppointmentPage = () => (
  <Layout>
    <>
      <HeaderNavBar />
      <NavBar />
      <GrayButton buttonText="Next" />
      <Footer />
    </>
  </Layout>
);

export default AppointmentPage;
