// owner-quote.js
import React from "react";
import ownerPicture from "../../assets/images/owner-quote-callie-photo.png";

// This is a functional component - just sent up a little differently as an arrow function!
const OwnerQuote = props => (
  <div>
    <img src={ownerPicture} alt="callie" />
    <p>
      "The look on a bride's face when she finds her dress - that is priceless
      and incredibly rewarding."
    </p>
    <p>Callie Tein | Designer</p>
  </div>
);

export default OwnerQuote;
