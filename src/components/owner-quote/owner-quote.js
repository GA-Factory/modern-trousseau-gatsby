// owner-quote.js
import React from "react";
import ownerPicture from "../../assets/images/owner-quote-callie-photo.png";
import styled from "styled-components";

const OwnerCard = styled.div`
  display: flex;
  padding: 38px;
  font-family: "Playfair Display";
`;

const OwnerPhoto = styled.img`
  display: block;
  width: 8.3125em;
  height: 7.8125em;

  @media only screen and (min-width: 768px) {
    width: 15.5625em;
    height: 16.625em;
  }
`;
const OwnerQuoteSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  color: ${props => props.theme.colors.nearBlack};
  font-size: 20px;
  line-height: 25px;
  padding: 10px;

  @media only screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 40px;
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
