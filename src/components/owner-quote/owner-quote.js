// owner-quote.js
import React from "react";
import ownerPicture from "../../assets/images/owner-quote-callie-photo.png";
import styled from "styled-components";

const OwnerCard = styled.div`
  display: flex;
`;

const OwnerQuoteSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 40px;
  color: #000000;
`;

const NameDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

// This is a functional component - just sent up a little differently as an arrow function!
const OwnerQuote = props => (
  <OwnerCard>
    <img src={ownerPicture} alt="callie" />
    <OwnerQuoteSection>
      <h1>{props.quote}</h1>
      <NameDescription>
        {props.name} | {props.role}
      </NameDescription>
    </OwnerQuoteSection>
  </OwnerCard>
);

export default OwnerQuote;
