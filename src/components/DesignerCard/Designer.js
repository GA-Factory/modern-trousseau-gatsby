import React from 'react';
import styled from 'styled-components';

const DivContainer = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;
`;

const PlaceImage = styled.img`
    max-width: 100%;
    width: 125px;
    height: 133px;
    display: block; 
    @media (min-width: 768px) {
        width: 250px;
        height: 266px;
        display: block;
    }
`;

const DivParagraph = styled.div`
    font-family: 'Playfair Display', serif;
    font-size: 11px;
    line-height: 15px;
    width: 50%;
    height: 97px;
    text-align: center;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    margin: 10px;
    @media (min-width: 768px) {
        font-size: 30px;
        line-height: 40px;
    }
`;

const PTitle = styled.p`
    @media (min-width: 768px) {
        text-align: right;
        margin: 20px;
    }
`;

const Designer = (props) => (
    <DivContainer>
        <PlaceImage src={props.src} alt={props.alt} />
        <DivParagraph>
            <p>{props.text}</p>
            <br />
            <PTitle>
                {props.name}
                {' '}
                |
                {' '}
                {props.title}
            </PTitle>
        </DivParagraph>
    </DivContainer>
);

export default Designer;
