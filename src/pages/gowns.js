import React from "react";
import ReactDOM from "react-dom";
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
                  src
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
  font-family: ${props => props.theme.fontStyles.h3Styles.fontStyle};
  font-weight: 800;
  font-weight: 18px;
  padding-left: 8.1%;
  border-top: 8px solid #fae5dc;
  background-color: ${props => props.theme.colors.primaryPink};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-top: 20px;
    margin-left: 6.5%;
    margin-bottom: 6px;
    padding-left: 10%;
    background-color: white;
    border-top: 8px solid #e5e5e5;
    font-weight: 22px;
    background-color: ${props => props.theme.colors.backgroundGray};
  }
`;

const GownsPage = props => {
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
      mobileLabel: props.data.allContentfulGowns.edges[0].node.collections[0].gowns[1]
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
      mobileLabel: props.data.allContentfulGowns.edges[0].node.collections[0].gowns[2]
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
      mobileLabel: props.data.allContentfulGowns.edges[0].node.collections[0].gowns[3]
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
      mobileLabel: props.data.allContentfulGowns.edges[0].node.collections[0].gowns[4]
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
      mobileLabel: props.data.allContentfulGowns.edges[0].node.collections[0].gowns[5]
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
      mobileLabel: props.data.allContentfulGowns.edges[0].node.collections[0].gowns[6]
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
      mobileLabel: props.data.allContentfulGowns.edges[0].node.collections[0].gowns[7]
      .name,
      desktopLabel:
        props.data.allContentfulGowns.edges[0].node.collections[0].gowns[7]
          .name,
      index: 7
    }
  ];
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
      {/* <img src='{props.data.allContentfulGowns.edges[0].node.gownImage.file.fileName}'/> */}
      <CollectionsContainer>
      <Link to='/collection'>
        <CollectionTitle>
          {
            props.data.allContentfulGowns.edges[0].node.collections[0]
            .collectionName
          }
        </CollectionTitle>
          </Link>
        <CollectionList slideData={cardData} title="Classics"></CollectionList>
        <SliderAdjuster>
        <Link to='/collection'>
          <CollectionTitle>
            {
              props.data.allContentfulGowns.edges[1].node.collections[0]
                .collectionName
            }
          </CollectionTitle>
          </Link>
          <CollectionList
            slideData={cardData}
            title="Classics"
          ></CollectionList>
        </SliderAdjuster>
        <SliderAdjuster>
        <Link to='/collection'>
          <CollectionTitle>
            {
              props.data.allContentfulGowns.edges[2].node.collections[0]
                .collectionName
            }
          </CollectionTitle>
          </Link>
          <CollectionList
            slideData={cardData}
            title="Classics"
          ></CollectionList>
        </SliderAdjuster>
        <SliderAdjuster>
        <Link to='/collection'>
          <CollectionTitle>
            {
              props.data.allContentfulGowns.edges[3].node.collections[0]
                .collectionName
            }
          </CollectionTitle>
          </Link>
          <CollectionList
            slideData={cardData}
            title="Classics"
          ></CollectionList>
        </SliderAdjuster>
      </CollectionsContainer>
      <Footer />
    </Layout>
  );
};

export default GownsPage;

//-------------------------------------------

//  DATA I NEED IS FETCHED WITH QUERY BELOW

// export const carouselImageQuery =
// graphql`
// query MyQuery {
//   allContentfulGowns {
//     group(field: id) {
//       nodes {
//         collections {
//           collectionName
//           gowns {
//             gownImage {
//               title
//               file {
//                 fileName
//                 url
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
// `
