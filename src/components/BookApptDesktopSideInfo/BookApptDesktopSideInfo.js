import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  max-width: 500px;
  width:100%;
`;

const Header = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  font-family: "Playfair Display", sans-serif;
  margin: 0;
  padding: 0;
`;

const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  display: block;
  margin-bottom: 15px;
`;

const BookApptDesktopSideInfo = () => (
    <Container>
        <Header>Bridal Appointments</Header>
        <Text>
            Modern Trousseau appointments are truly about you, the bride. Our
            Flagship stores offer private appointment for you, your family
            and friends, to create your dream wedding gown. With every Modern
            Trousseau gown made in Woodbridge, Connecticut, be prepared for
            fun, bubbles, and that magic moment where you find your dream dress.
        </Text>
        <Text>
            A Modern Trousseau team member will follow-up within 24 hours to
            confirm your appointment date and time. See you in the
            Flagship soon!
        </Text>
    </Container>
);

export default BookApptDesktopSideInfo;
