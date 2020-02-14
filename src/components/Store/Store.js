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
        {props.name}
        {props.city}
        {props.state}
        {props.zip}
        {props.phone}
        {props.email}
        {props.image}
        {props.description}
        {props.hours}
        {props.twitter}
        {props.instagram}
      </Container>
    </>
  );
};

export default Store;
