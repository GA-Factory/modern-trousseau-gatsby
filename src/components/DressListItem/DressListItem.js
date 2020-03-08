import React from "react";
import styled from "styled-components";

const Image = styled.img`
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
height: auto;
`;

const DesktopText = styled.p`
  text-align: center;
  margin-top: 5px;
  padding-bottom: 15px;
  font-weight: bold;
  font-family: ${props => props.theme.fontStyles.h5Styles.fontStyle};
  @media (max-width: 600px) {
    text-transform: uppercase;
    font-weight: bold;
  }
`;

const Wrapper = styled.div`
width: 100%;
height: auto;
  @media (max-width: 600px) {
    background: #fae5dc;
  }
`;

const DressListItem = props => (
  <Wrapper>
    <Image src={props.image} alt="image"></Image>
    <DesktopText>{props.dressname}</DesktopText>
  </Wrapper>
);

export default DressListItem;