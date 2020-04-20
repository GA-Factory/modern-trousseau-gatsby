import React from 'react';
import styled from 'styled-components';
import Icons from '../Icons/FAIcon';

const WhiteContainer = styled.section`
  background-color: #ffffff;
  display: flex;
  flex-flow: column;
  padding: 1em;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 600px;
`;

const H4 = styled.h4`
  margin: 0 auto;
  padding-bottom: 15px;
  font-family: "Playfair Display", sans-serif;
  font-size: 36px;
  line-height: 48px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  text-indent: 20px;
  margin: 0;
  font-family: 'Playfair Display', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
`;

const Text = styled.p`
  font-size: 20px;
  line-height: 28px;
  font-family: 'Playfair Display', sans-serif;
  display: block;
  width: 100%;
`;


const DefaultDisplay = () => (
    <>
        <H4>Book Appointment</H4>
    </>
);

const DatePicked = ({ message, date, location, time }) => (
    <>
        <H4>{message}</H4>
        <IconContainer>
            <Text>
                <Icons name={['fas', 'calendar-day']} size="sm" />
        &nbsp;&nbsp;
        {date}
            </Text>
            <Text>
                <Icons name={['fas', 'map-marker-alt']} size="sm" />
        &nbsp;&nbsp;
        {location}
            </Text>
            <Text>
                <Icons name={['far', 'clock']} size="sm" />
        &nbsp;&nbsp;
        {time}
            </Text>
        </IconContainer>
    </>
);

const BookApptHeaderDesktop = ({ dateSelected }) => (
    <WhiteContainer>
        {dateSelected ? <DatePicked /> : <DefaultDisplay />}
    </WhiteContainer>
);

export default BookApptHeaderDesktop;
