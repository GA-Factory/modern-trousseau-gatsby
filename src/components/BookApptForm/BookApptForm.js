import React from 'react';
import styled from 'styled-components';
import TextInput from '../TextInput/TextInput';

const Form = styled.form`
    margin: 0 auto;
    padding: 0;

`;

const BookApptForm = () => (
    <>
        <Form>
            <TextInput />
        </Form>
    </>
);


export default BookApptForm;
