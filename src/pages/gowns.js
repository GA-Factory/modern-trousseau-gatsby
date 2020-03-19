// import React from "react";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../components/FullLogo/Logo";
import NavMenuDesktop from "../components/NavMenu/NavMenuDesktop";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
// import GownHeader from "../components/GownHeader/GownHeader";
import CollectionList from "../components/CollectionList/CollectionList";
import Layout from "../global/Layout";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

let open = false;
let icon = faSlidersH;

// export const GownQuery = graphql`
//   query MyQuery {
//     allContentfulGowns(limit: 400, sort: { fields: name }) {
//       edges {
//         node {
//           collections {
//             collectionName
//             gowns {
//               name
//               gownImage {
//                 fluid {
//                   base64
//                   src
//                   srcSet
//                   srcSetWebp
//                   srcWebp
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export const GownQuery = graphql`
query MyQuery {
  allContentfulGowns(limit: 40, sort: {fields: name}) {
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

// const GownHeaderContainer = styled.div`
//   width: 100%;
//   display: flex;
//   padding: 0 30%;
//   border-top: 25px solid ${props => props.theme.colors.primaryPink};
//   background-color: ${props => props.theme.colors.primaryPink};
//   @media (min-width: ${props => props.theme.breakpoints.tablet}) {
//     display: none;
//   }
// `;

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

// const MobileCollectionTitle = styled.p`
//   font-weight: 800;
//   display: flex;
//   margin-top: 0;
//   padding-left: 2.5%;
//   background-color: white;
//   border-top: 8px solid #fae5dc;
//   background-color: ${props => props.theme.colors.primaryPink};
//   @media (min-width: ${props => props.theme.breakpoints.tablet}) {
//     display: none;
//   }
// `;

const CollectionDescription = styled.p`
display: none;
  font-weight: 500;
  padding-left: 2.5%;
  border-top: 5px solid #fae5dc;
  background-color: ${props => props.theme.colors.primaryPink};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    border-top: 5px solid #e5e5e5;
    background-color: ${props => props.theme.colors.backgroundGray};
  }
`;

const Button = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.primaryPink};
  border: 0;
  margin: 0;
  font-size: 36px;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const ButtonIcon = styled.p`
  display: flex;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const GownsPage = props => {
  const nodes1 =
    props.data.allContentfulGowns.edges[0].node.collections[0].gowns;
  const nodes2 =
    props.data.allContentfulGowns.edges[1].node.collections[0].gowns;
  const nodes3 =
    props.data.allContentfulGowns.edges[2].node.collections[0].gowns;
  const nodes4 =
    props.data.allContentfulGowns.edges[4].node.collections[0].gowns;

  nodes1.forEach((element, i) => {
    element.index = i;
  });
  nodes2.forEach((element, i) => {
    element.index = i;
  });
  nodes3.forEach((element, i) => {
    element.index = i;
  });
  nodes4.forEach((element, i) => {
    element.index = i;
  });


  // NEED TO FIX QUERY FOR THIS SPOT HERE
  const edges = props.data.allContentfulCollection.nodes;
  let newArray = edges.slice(2);
  newArray.forEach((element, i) => {
    element.index = i;
  });

  return (
    <Layout>
      <NavBar />
      <LogoContainer>
        <Logo notag tagline title1="MODERN" title2="trousseau"></Logo>
      </LogoContainer>
      {/* <GownHeaderContainer>
        <Button>
          <ButtonIcon>&#10094;</ButtonIcon>
        </Button>
        <GownHeader icon={icon} open={open} />
        <Button>
          <ButtonIcon>&#10095;</ButtonIcon>
        </Button>
      </GownHeaderContainer> */}
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
        <Link to="/collection">
          <CollectionTitle>
            {
              props.data.allContentfulGowns.edges[0].node.collections[0]
                .collectionName
            }
          </CollectionTitle>
        </Link>
        <CollectionDescription>
          A description of the theme of the gowns in the collection
        </CollectionDescription>
        <CollectionList slideData={nodes1} edges={newArray} title="Classics"></CollectionList>
            <MobileGridRemoval>
        <SliderAdjuster>
          <Link to="/collection">
            <CollectionTitle>
              {
                props.data.allContentfulGowns.edges[1].node.collections[0]
                  .collectionName
              }
            </CollectionTitle>
          </Link>
          <CollectionDescription>
            A description of the theme of the gowns in the collection
          </CollectionDescription>
          <CollectionList slideData={nodes2} edges={newArray} title="Classics"></CollectionList>
        </SliderAdjuster>
          <SliderAdjuster>
            <Link to="/collection">
              <CollectionTitle>
                {
                  props.data.allContentfulGowns.edges[2].node.collections[0]
                    .collectionName
                }
              </CollectionTitle>
            </Link>
            <CollectionDescription>
              A description of the theme of the gowns in the collection
            </CollectionDescription>
            <CollectionList
              slideData={nodes3}
              edges={newArray} 
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
            </Link>
            <CollectionDescription>
              A description of the theme of the gowns in the collection
            </CollectionDescription>
            <CollectionList
              slideData={nodes4}
              edges={newArray} 
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
