import React from 'react';
import ReactDOM from "react-dom";
import styled from "styled-components";
import Logo from '../components/FullLogo/Logo'
import Icons from '../components/Icons/FAIcon'
import CollectionList from '../components/CollectionList/CollectionList'
import Layout from '../global/Layout';

import imageFile1 from "../assets/images/Fall-2020-1.png";
import imageFile2 from "../assets/images/Fall-2020-2.png";
import imageFile3 from "../assets/images/Spring-2020-1.jpeg";
import imageFile4 from "../assets/images/Spring-2020-2.jpeg";
import imageFile5 from "../assets/images/Trending-Now-1.jpeg";
import imageFile6 from "../assets/images/Trending-Now-2.jpeg";
import imageFile7 from "../assets/images/Classics-1.jpeg";
import imageFile8 from "../assets/images/Classics-2.jpeg";

const cardData = [
  {
    image: imageFile1,
    mobileLabel: "LUCA",
    desktopLabel: "Luca",
    index: 0
  },
  {
    image: imageFile2,
    mobileLabel: "VIDA",
    desktopLabel: "Vida",
    index: 1
  },
  {
    image: imageFile3,
    mobileLabel: "ALWAYS",
    desktopLabel: "Always",
    index: 2
  },
  {
    image: imageFile4,
    mobileLabel: "BELIZE",
    desktopLabel: "Belize",
    index: 3
  },
  {
    image: imageFile5,
    mobileLabel: "ALICE",
    desktopLabel: "Alice",
    index: 4
  },
  {
    image: imageFile6,
    mobileLabel: "EVELYN",
    desktopLabel: "Evelyn",
    index: 5
  },
  {
    image: imageFile7,
    mobileLabel: "AINSLEY",
    desktopLabel: "Ainsley",
    index: 6
  },
  {
    image: imageFile8,
    mobileLabel: "ANNIE",
    desktopLabel: "Annie",
    index: 7
  }
];

const GownsPage = () => (
    <Layout>
        <Icons name={['fas', 'bars']} size = '7x' 
        style={{
            
        }}
            />
        <Logo notag ></Logo>
        <p>Fall 2020 Collection</p>
        <CollectionList slideData={cardData} title="Classics"></CollectionList>
        <p>Spring 2020 Collection</p>
        <CollectionList slideData={cardData} title="Classics"></CollectionList>
        <p>Trending Now</p>
        <CollectionList slideData={cardData} title="Classics"></CollectionList>
        <p>Classics</p>
        <CollectionList slideData={cardData} title="Classics"></CollectionList>
      <h1>WORK IN PROGRESS</h1>
    </Layout>
  );
  
  export default GownsPage;