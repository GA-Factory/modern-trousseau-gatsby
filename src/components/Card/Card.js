import React from "react";
import "./Card.css";
import Icons from "../Icons/FAIcon";
import styled from "styled-components";

const CardContainer = styled.div`
  // was styled with className primary-pink
  background-color: ${props => props.theme.colors.primaryPink};
  max-height: 169px;
  max-width: 234px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 14px 24px;
`;

const CardTitle = styled.div`
  margin: 10px 0 0 0;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 15px;
  text-align: center;
`;

const CardParagraph = styled.p`
  margin: 0;
  text-align: center;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;
  text-align: center;
`;

const Card = props => {
  return (
    <CardContainer>
      <Icons name={props.icon} size="3x" />
      <CardTitle>{props.title}</CardTitle>
      <CardParagraph>{props.paragraph}</CardParagraph>
    </CardContainer>
  );
};

export default Card;
