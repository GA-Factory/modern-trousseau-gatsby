import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 200px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
`;

const Store = props => {
  const StoreIndex = {};
  return (
    <>
      <Container>
        <ul>
          <li>{props.name}</li>
          <li>{props.city}</li>
          <li>{props.state}</li>
          <li>{props.zip}</li>
          <li>{props.phone}</li>
          <li>{props.email}</li>
          <li>{props.image}</li>
          <li>{props.description}</li>
          <li>{props.hours}</li>
          {props.twitter != null && <li>`Twitter: {props.twitter}`</li>}
          {props.instagram != null && <li>`Instagram: {props.instagram}`</li>}
        </ul>
      </Container>
    </>
  );
};

export default Store;
