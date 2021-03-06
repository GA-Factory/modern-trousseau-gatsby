import React from "react";
import styled from "styled-components";

const SingleDot = styled.div`
  height: 20px;
  width: 20px;
  padding: 10px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 50%;
  /* background-color: grey; */
  background-color: ${props =>
    props.imageIndex === props.dotIndex ? "black" : "blue"};
  /* background-color: grey; */
`;

const Dots = () => {
  return <SingleDot />;
};

export default Dots;
