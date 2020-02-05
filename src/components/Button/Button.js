import React from "react";
import "./Button.css";
import styled, { css } from "styled-components";

const Button = styled.button`
  background-color: #fae5dc;
  color: ${props => props.ftcolor};
  font-weight: ${props => props.ftweight};
  box-shadow: ${props => props.ftshadow};
  padding: ${props => props.ftpadding};
  width: ${props => props.ftwidth};
  font-size: ${props => props.ftsize};
  line-height: ${props => props.ftheight};
  
`

const PinkButton = props => {
  return <Button>{props.label}</Button>;
};

export default PinkButton;
