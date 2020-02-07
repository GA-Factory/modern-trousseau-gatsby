import React from "react";
import Icons from "../Icons/FAIcon";
import styled from "styled-components";

const CardContainer = styled.div`
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

const CardParagraph = styled.div`
  margin: 0;
  text-align: center;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: inherit;
  line-height: inherit;
`;

// const Icon = styled.fa`
//   background-color: red;
// `;

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
