import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
// import Img from "./Callie.jpg";

const AboutSection = styled.section`
  width: 100%;
  background-color: #ffffff;
  padding: 45px 20px;
  position: relative;
  margin: 0 auto;
  max-width: 1150px;
`;

const AboutContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-flow: column;
  padding: 15px 0 0 0;
  overflow: auto;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 900px) {
    flex-flow: row;
  }
`;

const OwnerImage = styled(Img)`
  float: right;
  max-width: 100%;
  width: 400px;
  height: 380px;
  margin: 0;
  padding: 0;
  display: block;
`;

const Title = styled.h2`
  text-align: center;
  font-family: "Raleway", sans-serif;
  font-size: 30px;
  line-height: 42px;
  text-transform: uppercase;
  padding: 0;
  margin: 0 auto;
`;

const Text = styled.p`
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  line-height: 22px;
  font-weight: normal;
  letter-spacing: auto;
  margin: 0 auto 1em;
  width: 100%;
  float: left;
  text-align: center;

  span {
    font-style: italic;
  }

  a {
    text-decoration: underline;
  }

  @media (min-width: 900px) {
    text-align: left;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  padding-right: 0;
  padding-bottom: 15px;

  @media (min-width: 900px) {
    padding-right: 25px;
    padding-bottom: 0;
  }
`;

const AboutUs = ({ data }) => (
  <AboutSection>
    <Title>About Modern Trousseau</Title>
    <AboutContainer>
      <TextContainer>
        <Text>
          Callie’s designs feature fine French and Italian fabrics and exclusive
          laces; when the perfect fabric cannot be found to suit her design, she
          will create the lace patterns and beadwork for productions in the
          finest ateliers. Modern Trousseau’s own production house is based in
          Woodbridge, CT, meaning all gowns are designed and made with love in
          the USA.
        </Text>
        <Text>
          Since the label launched in 2004, Modern Trousseau has been cemented
          as a favorite amongst brides worldwide. Callie’s distinctive designs
          have been featured in many print and online publications, including&nbsp;<span>Inside Weddings</span>, <span>People Magazine</span>,
          <span>Brides</span>, <span>Martha Stewart Weddings</span>, 
          <span>The Knot</span> and <span>Style Me Pretty</span>.
        </Text>
        <Text>
          The hallmark of the Modern Trousseau label is customization; we are
          proud to offer endless modification options to suit a bride’s
          individual vision for her wedding day look. Combine tops and bottoms,
          change necklines, modify shapes, choose colors, swap out laces and
          embroidery, enhance beading, add embellishments, and much more. All of
          these options to create a custom bridal gown, along with a quality
          fit, make each Modern Trousseau gown a one-of-a-kind, wearable work of
          art.
        </Text>
        <Text>
          Modern Trousseau bridal gowns are designed and made with love in the
          USA, and available at our <a href="/visit">flagship boutiques</a> and
          exclusive retailers worldwide.
        </Text>
      </TextContainer>
      <OwnerImage
        fluid={data.contentfulAsset.fluid}
        alt="Callie-Owner"
        role="img"
      />
    </AboutContainer>
  </AboutSection>
);

export default AboutUs;
