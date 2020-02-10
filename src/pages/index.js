import React from 'react';
import styled from 'styled-components';

import Layout from '../global/Layout';
import Tagline from '../components/Tagline/tagline';
import Footer from '../components/Footer/Footer';

const Page = styled.div`
  width: 1440px;
  max-width: 100%;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const IndexPage = (props) => (
  <Layout>
    <Page>
      <Tagline headline="Classic Couture. Custom Fit." slogan="Where customization meets timeline meets budget." />
      <Footer />
      </Page>
  </Layout>
);

export default IndexPage;
