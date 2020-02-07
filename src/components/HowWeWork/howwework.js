import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import DressCard from "../Card/Dress Card/dresscard";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding: 15px 0;
`;

const Title = styled.div`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #0f1f2f;
  margin: 15px auto 15px;
`;

const SingleCard = styled.div`
  margin-bottom: 30px;
  padding: 0 10px;
  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    padding: 0 30px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 1200px;
  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    flex-flow: row;
  }
`;

const HowWeWork = props => {
  return (
    <>
      <Wrapper>
        <Title>{props.title}</Title>
        <CardContainer>
          <SingleCard>
            <Card
              icon={["far", "heart"]}
              type="heart"
              title="Get Inspired"
              paragraph="Each design evokes classic couture while expressing a vision of modern style & sophistication."
            />
          </SingleCard>
          <SingleCard>
            <Card
              icon={["fas", "calendar-day"]}
              type="calendar"
              title="Book With Us"
              paragraph="Spend an hour with us to create a truly unique, personalized & flattering wedding dress."
            />
          </SingleCard>
          <SingleCard>
            <DressCard
              type="dress"
              title="Create Your Dream Dress"
              paragraph="Anything and everything is customizable to make you feel confident & beautiful."
            />
          </SingleCard>
        </CardContainer>
      </Wrapper>
    </>
  );
};

export default HowWeWork;
