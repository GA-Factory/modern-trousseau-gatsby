import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    max-width: 155px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: ${({ color }) => color.color};;
    background: ${({ bgColor }) => bgColor.backgroundColor};
    text-align:center;
    padding: 5px 0;
    margin: 0 auto;
    display: block;
    
        &:hover {
        cursor: pointer;
        }
`;

const GrayBg = {
    backgroundColor: 'rgba(68, 31, 14, 0.2)',
    color: '#000000',
};

const BrownBg = {
    backgroundColor: '#441F0E',
    color: '#ffffff',
};


const LargeGrayButton = ({ buttonText }) => {
    const [bgColor, setBgColor] = useState('gray');
    const [color, setColor] = useState('black');
    // eslint-disable-next-line max-len
    // const handleSimpleButtonClick = () => toggleSimpleButtonState(!simpleButtonState);
    const selectColor = () => {
        if (bgColor === 'gray' && color === 'black') {
            setBgColor('brown');
            setColor('white');
        } else {
            setBgColor('gray');
            setColor('black');
        }
    };
    return (
        // eslint-disable-next-line max-len
        <Button
          type="button"
          bgColor={bgColor === 'gray' ? GrayBg : BrownBg}
          color={color === 'black' ? GrayBg : BrownBg}
          onClick={selectColor}
        >
            {buttonText}
        </Button>
    );
};

export default LargeGrayButton;
