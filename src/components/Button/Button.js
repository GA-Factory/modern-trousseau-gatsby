import React from "react";
import "./Button.css";
import styled from "styled-components";

const Button = styled.button`
  background-color: #fae5dc;
  color: ${props => props.color};
  font-weight: ${props => props.weight};
  box-shadow: ${props => props.shadow};
  padding: ${props => props.padding};
  width: ${props => props.width};
  font-size: ${props => props.size};
  line-height: ${props => props.height};
  
`

const PinkButton = props => {
  return <Button>{props.label}</Button>;
};

export default PinkButton;
