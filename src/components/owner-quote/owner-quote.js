// owner-quote.js
import React from "react";
import ownerPicture from "../../assets/images/owner-quote-callie-photo.png";
import styled from "styled-components";

// @media only screen and (min-width : 480px) {
// }
// @media only screen and (min-width : 768px) {
// }
// @media only screen and (min-width : 1224px) {
// /* Styles */
// }

const OwnerCard = styled.div`
  display: flex;
`;

const OwnerQuoteSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #0f1f2f;

  @media only screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 40px;
    color: #000000;
  }
`;

const NameDescription = styled.div`
  display: flex;
  flex-direction: row;

  @media only screen and (min-width: 480px) {
    justify-content: center;
  }
  @media only screen and (min-width: 768px) {
    justify-content: flex-end;
  }
`;

// This is a functional component - just sent up a little differently as an arrow function!
const OwnerQuote = props => (
  <OwnerCard>
    <img src={ownerPicture} alt={props.name} />
    <OwnerQuoteSection>
      {props.quote}
      <NameDescription>
        {props.name} | {props.role}
      </NameDescription>
    </OwnerQuoteSection>
  </OwnerCard>
);

export default OwnerQuote;
