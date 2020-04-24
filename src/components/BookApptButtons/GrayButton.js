import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
width: 100%;
max-width: 75px;
font-family: 'Raleway';
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 19px;
color: #000000;
background: rgba(68, 31, 14, 0.2);
text-align:center;
padding: 5px 0;
margin: 0 auto;
`;

const GrayButton = ({ buttonText }) => (
    <Button>
        {buttonText}
    </Button>
);

export default GrayButton;
