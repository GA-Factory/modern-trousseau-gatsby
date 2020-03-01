import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import DressCard from "../Card/Dress Card/dresscard";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  margin: 0;
  padding: 15px 0;
`;

const Title = styled.div`
  font-family: 'Playfair Display', serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #0f1f2f;
  margin: 0 auto;
  padding: 0 0 5px;
  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    font-size: 40px;
    line-height: 53px;
    color: #000000;
    padding: 0 0 15px;
    font-family: 'Playfair Display', serif;
  }
`;

const SingleCard = styled.div`
  padding-bottom: 30px;
  margin: 0 auto;
  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    padding: 0;
    margin: 0;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  width: 1200px;
  padding: 20px;
  max-width: 100%;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 1100px) {
    flex-flow: row;
    justify-content: space-between;
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
              size='3x'
              title="Get Inspired"
              paragraph="Each design evokes classic couture while expressing a vision of modern style & sophistication."
            />
          </SingleCard>
          <SingleCard>
            <Card
              icon={["fas", "calendar-day"]}
              size='3x'
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
