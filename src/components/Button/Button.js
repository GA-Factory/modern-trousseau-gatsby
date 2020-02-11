import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${props => props.theme.colors.primaryPink};
  color: ${props => props.color};
  font-family: ${props => props.family};
  text-align: center;
  font-weight: ${props => props.weight};
  box-shadow: ${props => props.shadow};
  padding: ${props => props.padding};
  width: ${props => props.width};
  font-size: ${props => props.fontsize};
  line-height: ${props => props.height};

  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    font-family: "Raleway";
    padding: ${props => props.desktoppadding};
    width: ${props => props.desktopwidth};
    font-weight: ${props => props.desktopweight};
    font-size: ${props => props.desktopfontsize};
    line-height: ${props => props.desktopheight};
    color: ${props => props.desktopcolor};
  }
`;

const PinkButton = props => {
  return (
    <Button
      weight={props.weight}
      family={props.family}
      fontsize={props.fontsize}
      height={props.height}
      padding={props.padding}
      width={props.width}
      shadow={props.shadow}
      desktopwidth={props.desktopwidth}
      desktoppadding={props.desktoppadding}
      desktopheight={props.desktopheight}
      desktopfontsize={props.desktopfontsize}
      desktopweight={props.desktopweight}
      desktopcolor={props.desktopcolor}
      color={props.color}
    >
      {props.label}
    </Button>
  );
};

export default PinkButton;
