import React from 'react';
import Layout from '../global/Layout';
import NavBar from '../components/NavBar/NavBar';
import HeaderNavBar from '../components/HeaderNavBar/HeaderNavBar';
import BookApptForm from '../components/BookApptForm/BookApptForm';
import Footer from '../components/Footer/Footer';


const AppointmentPage = () => (
    <Layout>
      <HeaderNavBar />
      <NavBar />
      <BookApptForm />
      <Footer />
    </Layout>
);

export default AppointmentPage;
