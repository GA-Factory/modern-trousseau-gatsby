import React from "react";
import "./Button.css";
import styled from "styled-components";

const Button = styled.button`
  background-color: #fae5dc;
  color: #441f0e;
  font-weight: bold;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 11px;
`

const PinkButton = props => {
  return <Button>{props.label}</Button>;
};

export default PinkButton;
