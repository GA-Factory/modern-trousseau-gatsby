import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Logo from "../components/FullLogo/Logo";
import NavMenu from "../components/NavMenu/NavMenu";
import Footer from "../components/Footer/Footer";
import Icons from "../components/Icons/FAIcon";
import CollectionList from "../components/CollectionList/CollectionList";
import Layout from "../global/Layout";

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

const collectionTitle = [
  "Fall 2020 Collection",
  "Spring 2020 Collection",
  "Trending Now",
  "Classics"
];

const PageHeader = styled.div`
  display: flex;
`;

const SearchMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 55%;
  margin-left: 20%;
  margin-right: 25%;
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 8%;
  position: absolute;
  right: 0;
`;

const LogoContainer = styled.div`
  background-color: ${props => props.theme.colors.primaryPink};
  height: 221px;
  padding-top: 80px;
`

const CollectionsContainer = styled.div`
  margin-bottom: 20px;
`;

const CollectionTitle = styled.p`
  background-color: ${props => props.theme.colors.primaryPink};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-top: 20px;
    background-color: white;
    margin-left: 16.5%;
  }
`;

const GownsPage = () => (
  <Layout>
    <PageHeader>
      <Icons name={["fas", "bars"]} size="3x" style={{}} />
      <IconsContainer>
        <Icons name={["fas", "search"]} size="2x" />
        <Icons name={["fas", "map-marker-alt"]} size="2x" />
        <Icons name={["far", "user"]} size="2x" />
      </IconsContainer>
    </PageHeader>
    <LogoContainer>
    <Logo notag></Logo>
    </LogoContainer>    
    <NavMenu></NavMenu>
    <SearchMenu>
      <p>Search by Category</p>
      <p>Search by Silhouette</p>
      <p>Search by Details</p>
      <p>View Collection</p>
    </SearchMenu>
    <CollectionsContainer>
      <CollectionTitle>{collectionTitle[0]}</CollectionTitle>
      <CollectionList slideData={cardData} title="Classics"></CollectionList>
      <CollectionTitle>{collectionTitle[1]}</CollectionTitle>
      <CollectionList slideData={cardData} title="Classics"></CollectionList>
      <CollectionTitle>{collectionTitle[2]}</CollectionTitle>
      <CollectionList slideData={cardData} title="Classics"></CollectionList>
      <CollectionTitle>{collectionTitle[3]}</CollectionTitle>
      <CollectionList slideData={cardData} title="Classics"></CollectionList>
    </CollectionsContainer>
    <Footer></Footer>
  </Layout>
);

export default GownsPage;
