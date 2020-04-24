import React, { useState } from 'react';
import styled from 'styled-components';
import SelectDropdown from '../SelectDropdown/SelectDropdown';
import DatePicker from '../DatePicker/DatePicker';
import TextInput from '../TextInput/TextInput';

const FormContainer = styled.div`
    padding: 20px;
`;

const Form = styled.form`
    margin: 0 auto;
    padding: 0px;
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


const BookApptForm = () => {
    const [formIndex, setFormIndex] = useState(0);

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guestCount, setGuestCount] = useState('');
    const [location, setLocation] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [weddingDate, setWeddingDate] = useState('');
    const [hasTriedOn, setHasTriedOn] = useState(false);
    const [budget, setBudge] = useState('');
    const [hearAboutUs, setHearAboutUs] = useState('');
    const [recieveUpdates, setRecieveUpdates] = useState(false);
    const [anythingElse, setAnythingElse] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormIndex(formIndex + 1);
    };

    const _next = () => {
        setFormIndex(formIndex >= 2 ? 3 : formIndex + 1);
    };

    const _prev = () => {
        setFormIndex(formIndex <= 1 ? 1 : formIndex - 1);
    };

    const previousButton = () => {
        if (formIndex !== 1) {
            return (
                <button
                  type="button"
                  onClick={_prev}
                >
                    Previous
                </button>
            );
        }
        return null;
    };

    const nextButton = () => {
        if (formIndex < 3) {
            return (
                <button
                  type="button"
                  onClick={_next}
                >
                    Next
                </button>
            );
        }
        return null;
    };

    return (
        <FormContainer>
            <Header>Book Appointment</Header>
            <Form
              name="book-appointment form"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleFormSubmit}
            >
                <SelectDropdown
                  title="Select Flagship"
                  option={locationArr}
                  id="location"
                />
                <DatePicker
                  label="Requested Date*"
                  name="Requested Date"
                  value="November 11"
                />
                <TextInput />
                <TextInput />
                {previousButton()}
                {nextButton()}
            </Form>
        </FormContainer>
    );
};


export default BookApptForm;
