// owner-quote.js
import React from "react";
import ownerPicture from "../../assets/images/owner-quote-callie-photo.png";
import styled from "styled-components";

const OwnerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-family: "Playfair Display";
  max-width: 100%;
  margin: 0 auto;

  @media only screen and (min-width: 600px) {
    flex-direction: row;
    max-width: 1200px;
  }
`;

const OwnerPhoto = styled.img`
  display: block;
  width: 250px;
  margin: 3% auto;
`;

const OwnerQuoteSection = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.nearBlack};
  font-size: 20px;
  line-height: 25px;
  padding: 0;
  max-width: 90%;
  text-align: center;
  align-items: center;

  @media only screen and (min-width: 600px) {
    font-size: 25px;
    line-height: 35px;
    padding-left: 25px;
    width: calc(100% - 250px);
  }
  @media (min-width: 1000px) {
    align-items: flex-end;
  }
`;

const NameDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 25px;
  @media only screen and (min-width: 600px) {
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
