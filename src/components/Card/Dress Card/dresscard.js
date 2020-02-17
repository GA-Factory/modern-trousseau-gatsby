import React from "react";
import styled from "styled-components";
import Dress from "../../../assets/images/Tassel.svg"

const CardContainer = styled.div`
  background-color: ${props => props.theme.colors.primaryPink};
  height: 169px;
  max-width: 100%;
  width: 234px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 14px 15px;
  @media (min-width: 1100px) {
    width: 334px;
    height: 240px;
  }
`;

const CardTitle = styled.span`
  font-weight: 600;
  margin-bottom: 5px;
  @media (min-width: 1100px) {
    font-size:24px;
    line-height: 28px;
  }
`;

const CardParagraph = styled.div`
  margin: 10px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;
  color: ${props => props.theme.colors.nearBlack};
  @media (min-width: 1100px) {
    font-size:20px;
    line-height: 23px;
  }
`;

const Image = styled.img`
  display: block;
  height: 84px;
  width: auto;
`;

const DressCard = props => {
  return (
    <CardContainer>
      <Image src={Dress} alt="Dress Icon" />
      <CardParagraph>
        <CardTitle>{props.title}</CardTitle>
        {props.paragraph}
      </CardParagraph>
    </CardContainer>
  );
};

export default DressCard;
