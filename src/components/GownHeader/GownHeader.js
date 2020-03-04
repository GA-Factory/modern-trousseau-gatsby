import React from "react";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

library.add(faSlidersH);

const GownHead = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: #fae5dc;
  width: 100%;
  height: 50px;
  padding: 10px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const TextIcon = styled.div`
  display: flex;
`;

const GownFront = styled.h5`
  width: 86px;
  height: 26px;
  left: 138px;
  top: 122px;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: #000000;
`;

const GownSlider = styled.div`
  padding: 4px 0 0 10px;
`;

const Underline = styled.div`
  width: 151px;
  height: 0px;
  border: 0.5px solid #000000;
`;

const GownHeader = props => {
  return (
    <GownHead>
      <TextIcon>
        <GownFront>GOWNS</GownFront>
        <GownSlider>
          <FontAwesomeIcon icon={props.icon} />
        </GownSlider>
      </TextIcon>
      <Underline />
    </GownHead>
  );
};

export default GownHeader;
