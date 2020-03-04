import React from "react";
import styled from "styled-components";
import "./Designer.css";

const DesignerContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

const DesignerParagraph = styled.div`
  font-family: "Playfair Display", serif;
  font-size: 11px;
  line-height: 15px;
  width: 50%;
  height: 97px;
  text-align: center;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  margin: 10px;
  @media (min-width: 768px) {
    font-size: 30px;
    line-height: 40px;
  }
`;

const DesignerTitle = styled.p`
  @media (min-width: 768px) {
    text-align: right;
    margin: 20px;
  }
`;

const Designer = props => {
  return (
    <DesignerContainer>
      <img className="designerImage" src={props.src} alt={props.alt} />
      <DesignerParagraph>
        <p>{props.text}</p>
        <br />
        <DesignerTitle>
          {props.name} | {props.title}
        </DesignerTitle>
      </DesignerParagraph>
    </DesignerContainer>
  );
};

export default Designer;
