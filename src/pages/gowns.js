import React from "react";
import styled from "styled-components";
import Logo from "../components/FullLogo/Logo";
import NavMenuDesktop from "../components/NavMenu/NavMenuDesktop";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import GownHeader from "../components/GownHeader/GownHeader";
import CollectionList from "../components/CollectionList/CollectionList";
import Layout from "../global/Layout";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

let open = false;
let icon = faSlidersH;

export const GownQuery = graphql`
  query MyQuery {
    allContentfulGowns(limit: 400, sort: { fields: name }) {
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
  }
`;

const SearchMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin-left: 20%;
  margin-right: 20%;
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-flex;
    font-family: ${props => props.theme.fontStyles.h3Styles.fontStyle};
    font-weight: bold;
    background-color: ${props => props.theme.colors.backgroundGray};
  }
`;

const SearchMenuItems = styled.a``;

const SearchMenuContainer = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
    border-top: 24px solid #e5e5e5;
    border-bottom: 2px solid #e5e5e5;
    background-color: ${props => props.theme.colors.backgroundGray};
  }
`;

const LogoContainer = styled.div`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    background-color: ${props => props.theme.colors.primaryPink};
    display: block;
    height: 120px;
    padding-top: 50px;
  }
`;

const GownHeaderContainer = styled.div`
  border-top: 25px solid ${props => props.theme.colors.primaryPink};
`;

const SliderAdjuster = styled.div`
  height: 25%;
  border-top: 50px solid ${props => props.theme.colors.primaryPink};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    border-top: 0;
  }
`;

const MobileGridRemoval = styled.div`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
  }
`;

const CollectionsContainer = styled.div`
  border-top: 2px solid #fae5dc;
  background-color: ${props => props.theme.colors.backgroundGray};
  border-bottom: 60px solid ${props => props.theme.colors.primaryPink};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    border-top: 4px solid ${props => props.theme.colors.backgroundGray};
    border-bottom: 28px solid #e5e5e5;
  }
`;

const CollectionTitle = styled.p`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-weight: 800;
    display: flex;
    margin-top: 20px;
    margin-bottom: 6px;
    padding-left: 2.5%;
    background-color: white;
    border-top: 8px solid #e5e5e5;
    background-color: ${props => props.theme.colors.backgroundGray};
  }
`;

const MobileCollectionTitle = styled.p`
  font-weight: 800;
  display: flex;
  margin-top: 0;
  padding-left: 2.5%;
  background-color: white;
  border-top: 8px solid #fae5dc;
  background-color: ${props => props.theme.colors.primaryPink};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const CollectionDescription = styled.p`
  font-weight: 500;
  padding-left: 2.5%;
  border-top: 5px solid #fae5dc;
  background-color: ${props => props.theme.colors.primaryPink};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    border-top: 5px solid #e5e5e5;
    background-color: ${props => props.theme.colors.backgroundGray};
  }
`;

const ImgStyle = styled(Img)`
  width: 40px;
  height: 56px;
  margin: 10px auto;
  @media screen and (max-width: 425px) {
    height: 200px;
    width: 200px;
  }
`;

const GownsPage = props => {
  // console.log(props.data.allContentfulGowns.edges);
  // console.log(
  //   props.data.allContentfulGowns.edges[0].node.collections[0].collectionName
  // );
  // console.log(props.data.allContentfulGowns.edges[0].node.collections[0].gowns);

  // const cardData1 = [
  //   image: props.data.allContentfulGowns.edges[0].node.collections[0].gowns.gownImage,
  //   desktopLabel: props.data.allContentfulGowns.edges[0].node.collections[0].gowns.name
  // ]

  // console.log(cardData1)

  const nodes1 =
    props.data.allContentfulGowns.edges[0].node.collections[0].gowns;
  const nodes2 =
    props.data.allContentfulGowns.edges[1].node.collections[0].gowns;
  const nodes3 =
    props.data.allContentfulGowns.edges[2].node.collections[0].gowns;
  const nodes4 =
    props.data.allContentfulGowns.edges[4].node.collections[0].gowns;
  console.log(nodes1);
  console.log(nodes2);
  console.log(nodes3);
  console.log(nodes4);

  const AllCollectionImages1 = nodes1.map((collectionGowns, index) => (
    <div key={index}>
      {collectionGowns.gownImage ? (
        <ImgStyle fluid={collectionGowns.gownImage.fluid} />
      ) : null}
      <p
        style={{
          textAlign: "center"
        }}
      >
        {collectionGowns.name}
      </p>
      <p style={{
          textAlign: "center"
        }}>{index}</p>
    </div>
  ));

  console.log(AllCollectionImages1);
  const dataSet = [AllCollectionImages1];
  console.log(dataSet[0]);

  // const AllCollectionImages2 = nodes2.map((collectionGowns, index) => (
  //   <div key={index}>
  //     {collectionGowns.gownImage ? (
  //       <ImgStyle fluid={collectionGowns.gownImage.fluid} />
  //       ) : null}
  //       <p style={{
  //         textAlign: "center",
  //       }}>{collectionGowns.name}</p>
  //   </div>
  // ));
  // const AllCollectionImages3 = nodes3.map((collectionGowns, index) => (
  //   <div key={index}>
  //     {collectionGowns.gownImage ? (
  //       <ImgStyle fluid={collectionGowns.gownImage.fluid} />
  //       ) : null}
  //       <p style={{
  //         textAlign: "center",
  //       }}>{collectionGowns.name}</p>
  //   </div>
  // ));
  // const AllCollectionImages4 = nodes4.map((collectionGowns, index) => (
  //   <div key={index}>
  //     {collectionGowns.gownImage ? (
  //       <ImgStyle fluid={collectionGowns.gownImage.fluid} />
  //       ) : null}
  //       <p style={{
  //         textAlign: "center",
  //       }}>{collectionGowns.name}</p>
  //   </div>
  // ));

  const cardData = [
    {
      image:
        props.data.allContentfulGowns.edges[0].node.collections[0].gowns[0]
          .gownImage.fluid.src,
      mobileLabel:
        props.data.allContentfulGowns.edges[0].node.collections[0].gowns[0]
          .name,
      desktopLabel:
        props.data.allContentfulGowns.edges[0].node.collections[0].gowns[0]
          .name,
      index: 0
    },
    {
      image:
        props.data.allContentfulGowns.edges[0].node.collections[0].gowns[1]
          .gownImage.fluid.src,
      mobileLabel:
        props.data.allContentfulGowns.edges[0].node.collections[0].gowns[1]
          .name,
      desktopLabel:
        props.data.allContentfulGowns.edges[0].node.collections[0].gowns[1]
          .name,
      index: 1
    },
    {
      image:
        props.data.allContentfulGowns.edges[0].node.collections[0].gowns[2]
          .gownImage.fluid.src,
      mobileLabel:
        props.data.allContentfulGowns.edges[0].node.collections[0].gowns[2]
          .name,
      desktopLabel:
        props.data.allContentfulGowns.edges[0].node.collections[0].gowns[2]
          .name,
      index: 2
    },
    {
      image:
        props.data.allContentfulGowns.edges[0].node.collections[0].gowns[3]
          .gownImage.fluid.src,
      mobileLabel:
        props.data.allContentfulGowns.edges[0].node.collections[0].gowns[3]
          .name,
      desktopLabel:
        props.data.allContentfulGowns.edges[0].node.collections[0].gowns[3]
          .name,
      index: 3
    },
    {
      image:
        props.data.allContentfulGowns.edges[0].node.collections[0].gowns[4]
          .gownImage.fluid.src,
      mobileLabel:
        props.data.allContentfulGowns.edges[0].node.collections[0].gowns[4]
          .name,
      desktopLabel:
        props.data.allContentfulGowns.edges[0].node.collections[0].gowns[4]
          .name,
      index: 4
    },
    {
      image:
        props.data.allContentfulGowns.edges[0].node.collections[0].gowns[5]
          .gownImage.fluid.src,
      mobileLabel:
        props.data.allContentfulGowns.edges[0].node.collections[0].gowns[5]
          .name,
      desktopLabel:
        props.data.allContentfulGowns.edges[0].node.collections[0].gowns[5]
          .name,
      index: 5
    },
    {
      image:
        props.data.allContentfulGowns.edges[0].node.collections[0].gowns[6]
          .gownImage.fluid.src,
      mobileLabel:
        props.data.allContentfulGowns.edges[0].node.collections[0].gowns[6]
          .name,
      desktopLabel:
        props.data.allContentfulGowns.edges[0].node.collections[0].gowns[6]
          .name,
      index: 6
    },
    {
      image:
        props.data.allContentfulGowns.edges[0].node.collections[0].gowns[7]
          .gownImage.fluid.src,
      mobileLabel:
        props.data.allContentfulGowns.edges[0].node.collections[0].gowns[7]
          .name,
      desktopLabel:
        props.data.allContentfulGowns.edges[0].node.collections[0].gowns[7]
          .name,
      index: 7
    }
  ];

  const cardData1 = [];
  const cardData2 = [];
  const cardData3 = [];
  const cardData4 = [];

  return (
    <Layout>
      <NavBar />
      <LogoContainer>
        <Logo notag tagline title1="MODERN" title2="trousseau"></Logo>
      </LogoContainer>
      <GownHeaderContainer>
        <GownHeader icon={icon} open={open} />
      </GownHeaderContainer>
      <NavMenuDesktop />
      <SearchMenuContainer>
        <SearchMenu>
          <SearchMenuItems>Search by Category</SearchMenuItems>
          <SearchMenuItems>Search by Silhouette</SearchMenuItems>
          <SearchMenuItems>Search by Details</SearchMenuItems>
          <SearchMenuItems>View Collection</SearchMenuItems>
        </SearchMenu>
      </SearchMenuContainer>
      <CollectionsContainer>
      {/*  <div>{AllCollectionImages1}</div>
      <div>{AllCollectionImages2}</div>
      <div>{AllCollectionImages3}</div>
      <div>{AllCollectionImages4}</div> */}
        <Link to="/collection">
          <CollectionTitle>
            {
              props.data.allContentfulGowns.edges[0].node.collections[0]
                .collectionName
            }
          </CollectionTitle>
          <MobileCollectionTitle>
            {
              props.data.allContentfulGowns.edges[0].node.collections[0]
                .collectionName
            }
          </MobileCollectionTitle>
          <CollectionDescription>
            A description of the theme of the gowns in the collection
          </CollectionDescription>
        </Link>
        <CollectionList slideData={nodes1} title="Classics"></CollectionList>
        <SliderAdjuster>
          <Link to="/collection">
            <CollectionTitle>
              {
                props.data.allContentfulGowns.edges[1].node.collections[0]
                  .collectionName
              }
            </CollectionTitle>
            <MobileCollectionTitle>
              {
                props.data.allContentfulGowns.edges[1].node.collections[0]
                  .collectionName
              }
            </MobileCollectionTitle>
            <CollectionDescription>
              A description of the theme of the gowns in the collection
            </CollectionDescription>
          </Link>
          <CollectionList
            slideData={nodes2}
            title="Classics"
          ></CollectionList>
        </SliderAdjuster>
        <MobileGridRemoval>
          <SliderAdjuster>
            <Link to="/collection">
              <CollectionTitle>
                {
                  props.data.allContentfulGowns.edges[2].node.collections[0]
                    .collectionName
                }
              </CollectionTitle>
              <CollectionDescription>
                A description of the theme of the gowns in the collection
              </CollectionDescription>
            </Link>
            <CollectionList
              slideData={nodes3}
              title="Classics"
            ></CollectionList>
          </SliderAdjuster>
          <SliderAdjuster>
            <Link to="/collection">
              <CollectionTitle>
                {
                  props.data.allContentfulGowns.edges[4].node.collections[0]
                    .collectionName
                }
              </CollectionTitle>
              <CollectionDescription>
                A description of the theme of the gowns in the collection
              </CollectionDescription>
            </Link>
            <CollectionList
              slideData={nodes4}
              title="Classics"
            ></CollectionList>
          </SliderAdjuster>
        </MobileGridRemoval>
      </CollectionsContainer>
      <Footer />
    </Layout>
  );
};

export default GownsPage;
