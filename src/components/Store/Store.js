import React from "react";
import styled from "styled-components";
import { number } from "prop-types";

const Container = styled.div`
  max-width: 200px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StoreInfo = styled.ul`
  margin-top: 24px;
`;

const InfoItem = styled.li`
  margin: 1px 0px;
`;
const Store = props => {
  // Adds ()  - - to the phone number
  let num = props.phone;
  var newNum =
    "(" + num.slice(0, 3) + ")-" + num.slice(3, 6) + "-" + num.slice(6, 10);

  return (
    <>
      <Container>
        <img src={props.image} />
        <StoreInfo>
          <InfoItem>{props.name}</InfoItem>
          <InfoItem>{props.street}</InfoItem>
          <InfoItem>
            {props.city}, {props.state} {props.zip}
          </InfoItem>
          <InfoItem>{newNum}</InfoItem>
          <InfoItem>{props.email}</InfoItem>
        </StoreInfo>
      </Container>
    </>
  );
};

export default Store;

// Location index
// {props.twitter != null && <li>`Twitter: {props.twitter}`</li>}
// {props.instagram != null && <li>`Instagram: {props.instagram}`</li>}
