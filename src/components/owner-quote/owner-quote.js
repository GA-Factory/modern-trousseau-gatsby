// owner-quote.js
import React from "react";
import ownerPicture from "../../assets/images/owner-quote-callie-photo.png";
import styled from "styled-components";
import variables from "../../styles/styled-components.js";

// @media only screen and (min-width : 480px) {
// }
// @media only screen and (min-width : 768px) {
// }
// @media only screen and (min-width : 1224px) {
// /* Styles */
// }

const OwnerCard = styled.div`
  display: flex;
  padding: 38px;
`;

const OwnerPhoto = styled.img`
  display: block;
  width: 133px;
  height: 125px;

  @media only screen and (min-width: 768px) {
    width: 249.45px;
    height: 266px;
  }
`;

const OwnerQuoteSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  color: #0f1f2f;
  font-size: 12px;

  @media only screen and (min-width: 480px) {
    font-size: 30px;
    line-height: 40px;
    color: #000000;
  }

  @media only screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 40px;
    color: #000000;
  }
`;

const NameDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    justify-content: flex-end;
  }
`;

// This is a functional component - just sent up a little differently as an arrow function!
const OwnerQuote = props => (
  <OwnerCard>
    <OwnerPhoto src={ownerPicture} alt={props.name} />
    <OwnerQuoteSection>
      {props.quote}
      <NameDescription>
        {props.name} | {props.role}
      </NameDescription>
    </OwnerQuoteSection>
  </OwnerCard>
);

export default OwnerQuote;
