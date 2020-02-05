// owner-quote.js
import React from "react";
import ownerPicture from "../../assets/images/owner-quote-callie-photo.png";

import styled from "styled-components";

const OwnerCard = styled.div`
  display: flex;
`;

const OwnerQuoteSection = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  align-items: center;
  width: 420px;
  text-align: center;
`;

const OwnerFontWriting = styled.h1`
  font-family: Playfair Display;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 40px;
  text-align: center;

  color: #000000;
`;
// This is a functional component - just sent up a little differently as an arrow function!
const OwnerQuote = props => (
  <OwnerCard>
    <img src={ownerPicture} alt="callie" />
    <OwnerQuoteSection>
      <h1>
        "The look on a bride's face when she finds her dress - that is priceless
        and incredibly rewarding."
      </h1>
      <h1>Callie Tein | Designer</h1>
    </OwnerQuoteSection>
  </OwnerCard>
);

export default OwnerQuote;
