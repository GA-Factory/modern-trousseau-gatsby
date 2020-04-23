import React from 'react';
import styled from 'styled-components';
import SelectDropdown from '../SelectDropdown/SelectDropdown';
import TextInput from '../TextInput/TextInput';

const Form = styled.form`
    margin: 0 auto;
    padding: 0;

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
        <Form>
            <SelectDropdown title="Select Flagship" option={locationArr} />
            <TextInput />
        </Form>
    </>
);


export default BookApptForm;
