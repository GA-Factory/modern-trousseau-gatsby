import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Logo from "../components/FullLogo/Logo";
import NavMenuDesktop from "../components/NavMenu/NavMenuDesktop";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import Icons from "../components/Icons/FAIcon";
import PinkButton from "../components/Button/Button";
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

const BodyContainer = styled.div`
background-color: ${props => props.theme.colors.primaryPink};
@media (min-width: ${props => props.theme.breakpoints.tablet}) {
  background-color: ${props => props.theme.colors.backgroundGray}
}
`

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

const CollectionTitle = styled.p`
  font-family: ${props => props.theme.fontStyles.h3Styles.fontStyle};
  font-weight: 800;
  font-weight: 18px;
  font-size: 22px;
  padding-left: 5.5%;
  border-top: 8px solid #fae5dc;
  background-color: ${props => props.theme.colors.primaryPink};
  text-align: center;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    text-align: center;
    background-color: white;
    border-top: 8px solid #e5e5e5;
    border-bottom: 20px solid #e5e5e5;
    font-weight: 22px;
    background-color: ${props => props.theme.colors.backgroundGray};
  }
`;

const TitleContainer = styled.div`
  background-color: ${props => props.theme.colors.primaryPink};
  display: flex;
  width: 100%;
  justify-content: center;
  border-top: 20px solid ${props => props.theme.colors.primaryPink};
  border-bottom: 20px solid ${props => props.theme.colors.primaryPink};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const DesktopCollectionTitleContainer = styled.p`
display: none;
 @media (min-width: ${props => props.theme.breakpoints.tablet}) {
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: ${props => props.theme.colors.backgroundGray};
 }
`

const LeftArrowContainer = styled.div`
  background-color: ${props => props.theme.colors.primaryPink};
  justify-content: center;
  padding-top: 8px;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const RightArrowContainer = styled.div`
  background-color: ${props => props.theme.colors.primaryPink};
  justify-content: center;
  padding-top: 8px;
  margin-left: 25px;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const ImageAndDetailsContainer = styled.div`
@media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
  }
`

const GownImage = styled.img`
  background-color: ${props => props.theme.colors.primaryPink};
  display: flex;
  width: 82.4%;
  justify-content: center;
  margin: auto;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    background-color: ${props => props.theme.colors.backgroundGray};
    width: 50%;
    padding-left: 10%;
    padding-top: 5px;
  }
`;

const DesktopFlexColumn = styled.div`
@media (min-width: ${props => props.theme.breakpoints.tablet}) {
  width: 50%;
  display: flex;
  flex-direction: column;
}
`

const Name = styled.p`
  font-size: 22px;
  font-style: normal;
  font-weight: bold;
  margin: 10px 0 10px 8.8%;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 80%;
    padding-left: 15%;
    margin-bottom: 12%;
    /* text-align: center; */
  }
`;

const Brief = styled.p`
display: none;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-block;
    width: 54%;
    margin-left: 8%;
    margin-bottom: 12%;
    font-family: Raleway;
    font-style: 800;
    font-weight: bold;
    font-size: 14px;
  }
`;

const DetailsFeatures = styled.p`
display: none;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-block;
    width: 54%;
    margin-left: 8%;
    margin-bottom: 4%;
    font-family: Raleway;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
  }
`;

const Description = styled.p`
display: none;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-block;
    width: 54%;
    margin-left: 8%;
    font-family: Raleway;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
  }
`;

const DetailsAndFeaturesContainer = styled.div`
  display: flex;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  margin: 0 0 36px 8.8%;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    border: 1px solid red;
    width: 40%;
    display: none;
  }
`;

const Details = styled.p`
@media (min-width: ${props => props.theme.breakpoints.tablet}) {
}`;

const DesktopButtonContainer = styled.p`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    margin-left: 8%;
    margin-top: 24%;
}
`;

const MobileButtonContainer = styled.p`
  display: flex;
  justify-content: center;
  border-bottom: 48px solid ${props => props.theme.colors.primaryPink};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
  display: none;
}
`;

const DifferentAnglesContainer = styled.div`
display: none;
@media (min-width: ${props => props.theme.breakpoints.tablet}) {
  display: flex;
  margin-top: 30px;
  margin-left: 10%;
  border-bottom: 200px solid ${props => props.theme.colors.backgroundGray};
}
`

const DifferentAngles = styled.img`
display: none;
@media (min-width: ${props => props.theme.breakpoints.tablet}) {
  display: inline-block;
  width: 24%;
  height: 300px;
  margin: 0 26px 0 0;
}
`

const GownsPage = () => (
  <Layout>
    <NavBar />
    <LogoContainer>
      <Logo notag />
    </LogoContainer>
    <NavMenuDesktop />
    <BodyContainer>
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
      <DesktopCollectionTitleContainer>
        <CollectionTitle>Fall 2020</CollectionTitle>
      </DesktopCollectionTitleContainer>
    </SearchMenuContainer>
    <ImageAndDetailsContainer>
    <GownImage src={cardData[0].image} />
    <DesktopFlexColumn>
    <Name>{cardData[0].mobileLabel}</Name>
    <Brief>Stuff</Brief>
    <DetailsFeatures>Details and Features</DetailsFeatures>
    <Description>Description with a whole bunch of stuff describing the gown</Description>
    <DesktopButtonContainer>
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
    </DesktopButtonContainer>
    </DesktopFlexColumn>
    <DetailsAndFeaturesContainer>
      <Icons name={["far", "plus-square"]} />
      <Details>Details and Features</Details>
    </DetailsAndFeaturesContainer>
    </ImageAndDetailsContainer>
    <MobileButtonContainer>
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
    </MobileButtonContainer>
    <DifferentAnglesContainer>
    <DifferentAngles src={cardData[1].image} />
    <DifferentAngles src={cardData[2].image} />
    <DifferentAngles src={cardData[3].image} />
    </DifferentAnglesContainer>
    </BodyContainer>
    <Footer />
  </Layout>
);

export default GownsPage;
