import React from "react";
import Icons from "../Icons/FAIcon";
import styled from "styled-components";
import './Card.css'

const CardContainer = styled.div`
  background-color: ${props => props.theme.colors.primaryPink};
  max-height: 169px;
  height: 169px;
  max-width: 234px;
  width: 2234px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 14px 20px;
`;

const CardTitle = styled.div`
  font-weight: 600;
  margin-bottom: 5px;
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
`;

const Card = props => {
  return (
    <CardContainer>
      <Icons name={props.icon} size="3x" />
      <CardParagraph>
        <CardTitle>{props.title}</CardTitle>
        {props.paragraph}
      </CardParagraph>
    </CardContainer>
  );
};

export default Card;
