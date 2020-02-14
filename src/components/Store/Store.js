import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`;

const Store = props => {
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
          {props.twitter}
          {props.twitter != null && <li>{props.twitter}</li>}
          <li>{props.instagram}</li>
        </ul>
      </Container>
    </>
  );
};

export default Store;
