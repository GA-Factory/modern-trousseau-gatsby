import React from "react";
// import "./DressListItem.css";
import styled from "styled-components";

const Image = styled.img`
  margin: 0px;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    background: #fae5dc;
  }
`;

const DesktopText = styled.p`
  text-align: center;
  margin-top: 5px;
  padding-bottom: 15px;
  font-weight: 800;
  font-family: ${props => props.theme.fontStyles.h3Styles.fontStyle};
  font-size: ${props => props.theme.fontStyles.h3Styles.fontSize};
`;

const Wrapper = styled.div`
@media (max-width: 600px) {
 
  background: #fae5dc;

`;

const DressListItem = props => (
  <Wrapper>
    <Image src={props.image} alt="image"></Image>

    <DesktopText>{props.dressname}</DesktopText>
  </Wrapper>
);

export default DressListItem;
