import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
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

const Container = styled.div``;

const HowWeWork = props => {
  return (
    <>
      <Wrapper>
        <Title>{props.title}</Title>
        <Card
          icon={["far", "heart"]}
          type="heart"
          title="Get Inspired"
          paragraph="Each design evokes classic couture while expressing a vision of modern style & sophistication."
        />
        <Card
          icon={["fas", "calendar-day"]}
          type="calendar"
          title="Book With Us"
          paragraph="Spend an hour with us to create a truly unique, personalized & flattering wedding dress."
        />
        <Card
          icon={["far", "hand-pointer"]}
          type="dress"
          title="Create Your Dream Dress"
          paragraph="Anything and everything is customizable to make you feel confident & beautiful."
        />
      </Wrapper>
    </>
  );
};

export default HowWeWork;
