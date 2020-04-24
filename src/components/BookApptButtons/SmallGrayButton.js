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
    background: ${(clicked) => (clicked ? 'rgba(68, 31, 14, 0.2)' : '#441F0E')};
    text-align:center;
    padding: 5px 0;
    margin: 0 auto;
    
        &:hover {
        cursor: pointer;
        }
`;

const SmallGrayButton = ({ buttonText }) => (
    <Button type="button">
        {buttonText}
    </Button>
);

export default SmallGrayButton;
