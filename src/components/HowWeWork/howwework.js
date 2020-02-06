import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`;

const Title = styled.div`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #0f1f2f;
`;

const HowWeWork = props => {
  return (
    <>
      <Container>
        <Title>{props.title}</Title>
      </Container>
    </>
  );
};

export default HowWeWork;
