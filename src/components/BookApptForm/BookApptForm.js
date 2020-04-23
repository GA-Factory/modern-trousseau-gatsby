import React from 'react';
import styled from 'styled-components';
import SelectDropdown from '../SelectDropdown/SelectDropdown';
import TextInput from '../TextInput/TextInput';

const Form = styled.form`
    margin: 0 auto;
    padding: 20px;
`;

const Header = styled.h2`
    font-family: 'Raleway';
    font-weight: bolder;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    position: relative;
    padding-bottom: 20px;
    margin: auto 0;
`;

const locationArr = [
    'Baltimore, MD',
    'Charleston, SC',
    'Long Island, NY',
    'Louisville, KY',
    'Nashville, TN',
    'New Haven, CT',
    'Washington, DC',
];

const BookApptForm = () => (
    <>
        <Form
          name="book-appointment form"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
            <Header>Book Appointment</Header>
            <SelectDropdown title="Select Flagship" option={locationArr} />
            <TextInput />
        </Form>
    </>
);


export default BookApptForm;
