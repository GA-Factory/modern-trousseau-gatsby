import React from 'react';
import ReactDOM from "react-dom";
import styled from "styled-components";
import Logo from '../components/FullLogo/Logo'
import Icons from '../components/Icons/FAIcon'
import CollectionList, { slideData } from '../components/CollectionList/CollectionList'
import Layout from '../global/Layout';

const GownsPage = () => (
    <Layout>
        <Icons name={['fas', 'bars']} size = '7x' 
        style={{
            
        }}
            />
        <Logo notag ></Logo>
        <CollectionList slideData={slideData} title="Classics"></CollectionList>
      <h1>WORK IN PROGRESS</h1>
    </Layout>
  );
  
  export default GownsPage;