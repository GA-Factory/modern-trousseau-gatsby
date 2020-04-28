import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Logo from "../components/FullLogo/Logo";
import NavMenuDesktop from "../components/NavMenu/NavMenuDesktop";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import Icons from "../components/Icons/FAIcon";
import PinkButton from "../components/Button/Button";
import DressListItem from "../components/DressListItem/DressListItem";
import CollectionList from "../components/CollectionList/CollectionList";
import Layout from "../global/Layout";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

// import cardData from "./Gowns"

export const GownQuery = graphql`
  query MyQuery {
    allContentfulGowns(limit: 40, sort: { fields: name }) {
      edges {
        node {
          collections {
            collectionName
            gowns {
              name
              gownImage {
                fluid {
                  base64
                  src
                  srcSet
                  srcSetWebp
                  srcWebp
                }
              }
            }
          }
        }
      }
    }
    allContentfulCollection(limit: 40) {
      nodes {
        collectionName
        gowns {
          name
          gownImage {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;


import imageFile1 from "../assets/images/Fall-2020-1.png";
import imageFile2 from "../assets/images/Fall-2020-2.png";
import imageFile3 from "../assets/images/Spring-2020-1.jpeg";
import imageFile4 from "../assets/images/Spring-2020-2.jpeg";
import imageFile5 from "../assets/images/Trending-Now-1.jpeg";
import imageFile6 from "../assets/images/Trending-Now-2.jpeg";
import imageFile7 from "../assets/images/Classics-1.jpeg";
import imageFile8 from "../assets/images/Classics-2.jpeg";



// const cardData = [
//   {
//     image: imageFile1,
//     mobileLabel: "LUCA",
//     desktopLabel: "Luca",
//     index: 0
//   },
//   {
//     image: imageFile2,
//     mobileLabel: "VIDA",
//     desktopLabel: "Vida",
//     index: 1
//   },
//   {
//     image: imageFile3,
//     mobileLabel: "ALWAYS",
//     desktopLabel: "Always",
//     index: 2
//   },
//   {
//     image: imageFile4,
//     mobileLabel: "BELIZE",
//     desktopLabel: "Belize",
//     index: 3
//   },
//   {
//     image: imageFile5,
//     mobileLabel: "ALICE",
//     desktopLabel: "Alice",
//     index: 4
//   },
//   {
//     image: imageFile6,
//     mobileLabel: "EVELYN",
//     desktopLabel: "Evelyn",
//     index: 5
//   },
//   {
//     image: imageFile7,
//     mobileLabel: "AINSLEY",
//     desktopLabel: "Ainsley",
//     index: 6
//   },
//   {
//     image: imageFile8,
//     mobileLabel: "ANNIE",
//     desktopLabel: "Annie",
//     index: 7
//   }
// ];

const collectionTitle = [
  "Fall 2020 Collection",
  "Spring 2020 Collection",
  "Trending Now",
  "Classics"
];

const DressListItemGrid = styled.div`
  display: none;
  @media (min-width: 600px) {
    display: grid;
    width: 90%;
    grid-template-columns: 30% 30% 30%;
    grid-template-rows: 33% 33% 33%;
    justify-items: center;
    margin-left: 10%;
  }
`;

const MobileNavBarContainer = styled.div`
  @media (min-width: 600px) {
    display: none;
  }
`;

const DesktopNavBarContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const SearchMenuContainer = styled.div`
  @media (min-width: 600px) {
    width: 100%;
    border-top: 24px solid #e5e5e5;
    border-bottom: 2px solid #e5e5e5;
    background-color: ${props => props.theme.colors.backgroundGray};
  }
`;

const LogoContainer = styled.div`
  display: none;
  @media (min-width: 600px) {
    background-color: ${props => props.theme.colors.primaryPink};
    display: block;
    height: 120px;
    padding-top: 50px;
  }
`;

const SliderAdjuster = styled.div`
  height: 25%;
  border-top: 50px solid ${props => props.theme.colors.primaryPink};
  @media (min-width: 600px) {
    border-top: 0;
  }
`;

const CollectionsContainer = styled.div`
  border-top: 2px solid #fae5dc;
  background-color: ${props => props.theme.colors.backgroundGray};
  border-bottom: 60px solid ${props => props.theme.colors.primaryPink};
  @media (min-width: 600px) {
    display: none;
  }
`;

const CollectionTitle = styled.p`
  font-family: ${props => props.theme.fontStyles.h3Styles.fontStyle};
  font-weight: 800;
  font-weight: 18px;
  font-size: 22px;
  padding-left: 5.5%;
  border-top: 8px solid #fae5dc;
  background-color: ${props => props.theme.colors.primaryPink};
  text-align: center;
  @media (min-width: 600px) {
    text-align: center;
    background-color: white;
    border-top: 8px solid #e5e5e5;
    border-bottom: 20px solid #e5e5e5;
    font-weight: 22px;
    background-color: ${props => props.theme.colors.backgroundGray};
  }
`;

const DesktopCollectionTitle = styled.p`
  display: none;
  @media (min-width: 600px) {
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: white;
    border-top: 8px solid #e5e5e5;
    border-bottom: 20px solid #e5e5e5;
    font-size: 24px;
    font-weight: bold;
    background-color: ${props => props.theme.colors.backgroundGray};
  }
`;

const TitleContainer = styled.div`
  background-color: ${props => props.theme.colors.primaryPink};
  display: flex;
  width: 100%;
  justify-content: center;
  @media (min-width: 600px) {
    display: none;
  }
`;

const LeftArrowContainer = styled.div`
  background-color: ${props => props.theme.colors.primaryPink};
  justify-content: center;
  padding-top: 8px;
`;

const RightArrowContainer = styled.div`
  background-color: ${props => props.theme.colors.primaryPink};
  justify-content: center;
  padding-top: 8px;
  margin-left: 25px;
`;

const DesignerQuote = styled.p`
  background-color: ${props => props.theme.colors.primaryPink};
  text-align: center;
  padding: 20px 5% 0 5%;

  @media (min-width: 600px) {
    display: none;
  }
`;

const QuoteAuthor = styled.p`
  background-color: ${props => props.theme.colors.primaryPink};
  text-align: center;
  padding: 20px 5% 0 5%;

  @media (min-width: 600px) {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  background-color: ${props => props.theme.colors.primaryPink};
  display: none;
  @media (min-width: 600px) {
    display: inline-block;
    width: 100%;
    text-align: center;
    background-color: #e5e5e5;
    border-top: 20px solid #e5e5e5;
    border-bottom: 80px solid #e5e5e5;
  }
`;

const CollectionPage = () => (
  <Layout>
    <MobileNavBarContainer>
      <NavBar />
    </MobileNavBarContainer>
    <DesktopNavBarContainer>
      <NavBar />
    </DesktopNavBarContainer>
    <LogoContainer>
    <Logo notag tagline title1="MODERN" title2="trousseau"></Logo>
    </LogoContainer>
    <NavMenuDesktop />
    <SearchMenuContainer>
      <TitleContainer>
        <LeftArrowContainer>
          <Icons name={["fas", "arrow-left"]} size="1x" />
        </LeftArrowContainer>
        <CollectionTitle>{collectionTitle[0]}</CollectionTitle>
        <RightArrowContainer>
          <Icons name={["fas", "arrow-right"]} size="1x" />
        </RightArrowContainer>
      </TitleContainer>
      <DesignerQuote>
        Quote from a desiginer that says some stuff! And Also some things!! And
        it needs to be longer for me to test it!!!
      </DesignerQuote>
      <QuoteAuthor>-Person J. Somebody</QuoteAuthor>
      <DesktopCollectionTitle>Fall 2020 Collection</DesktopCollectionTitle>
      <DressListItemGrid>
        <Link to="/gown">
          <DressListItem image={imageFile1} dressname={"Seraphina"} />
        </Link>
        <Link to="/gown">
          <DressListItem image={imageFile1} dressname={"Seraphina"} />
        </Link>
        <Link to="/gown">
          <DressListItem image={imageFile1} dressname={"Seraphina"} />
        </Link>
        <Link to="/gown">
          <DressListItem image={imageFile1} dressname={"Seraphina"} />
        </Link>
        <Link to="/gown">
          <DressListItem image={imageFile1} dressname={"Seraphina"} />
        </Link>
        <Link to="/gown">
          <DressListItem image={imageFile1} dressname={"Seraphina"} />
        </Link>
        <Link to="/gown">
          <DressListItem image={imageFile1} dressname={"Seraphina"} />
        </Link>
        <Link to="/gown">
          <DressListItem image={imageFile1} dressname={"Seraphina"} />
        </Link>
        <Link to="/gown">
          <DressListItem image={imageFile1} dressname={"Seraphina"} />
        </Link>
      </DressListItemGrid>
    </SearchMenuContainer>
    <CollectionsContainer>
      {/* <CollectionList slideData={cardData} title="Classics"></CollectionList> */}
      <SliderAdjuster>
        {/* <CollectionList slideData={cardData} title="Classics"></CollectionList> */}
      </SliderAdjuster>
      <SliderAdjuster>
        {/* <CollectionList slideData={cardData} title="Classics"></CollectionList> */}
      </SliderAdjuster>
    </CollectionsContainer>
    <ButtonContainer>
      <PinkButton
        label="See More From This Collection"
        width={`${"250px"}`}
        fontsize={`${"12px"}`}
        height={`${"14px"}`}
        weight={`${"800"}`}
        padding={`${"5px 0"}`}
        shadow={`${"0px 4px 4px rgba(0, 0, 0, 0.25)"}`}
        color={`${"#000000"}`}
        desktopfontsize={`${"14px"}`}
        desktopheight={`${"16px"}`}
      />
    </ButtonContainer>
    <Footer />
  </Layout>
);

export default CollectionPage;
