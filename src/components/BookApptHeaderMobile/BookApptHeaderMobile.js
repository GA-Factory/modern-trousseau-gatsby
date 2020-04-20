import React, { useState } from 'react';
import styled from 'styled-components';
import Icons from '../Icons/FAIcon';

const PinkContainer = styled.section`
  background-color: ${(props) => props.theme.colors.primaryPink};
  display: flex;
  flex-flow: column;
  padding: 1em;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const InfoView = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  width: 100%;
`;

const H4 = styled.h4`
  font-family: "Raleway", sans-serif;
  font-weight: bolder;
  font-style: normal;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0;
  color: #000000;
  padding: 0 0 10px 0;
`;

const IconContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  text-indent: 20px;
  margin: 0;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 18px;
  font-family: "Raleway", sans-serif;
  display: block;
  width: 100%;
`;

const DefaultInfo = () => (
  <>
    <H4>Bridal Appointments</H4>
    <Text>
      Modern Trousseau appointments are truly about you, the bride. Our
      Flagship stores offer private appointment for you, your family and
      friends, to create your dream wedding gown. With every Modern Trousseau
      gown made in Woodbridge, Connecticut, be prepared for fun, bubbles, and
      that magic moment where you find your dream dress.
    </Text>
  </>
);

const DatePicked = ({ date, location, time }) => (
  <InfoView>
    <H4>Book Appointment</H4>
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
  </InfoView>
);

const BookApptHeaderMobile = () => {
  const { dateSelected, setDateSelected } = useState('false');
  return (
    <PinkContainer>
      {dateSelected ? <DatePicked /> : <DefaultInfo /> }
    </PinkContainer>
  );
};

export default BookApptHeaderMobile;
