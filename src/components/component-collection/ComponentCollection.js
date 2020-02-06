import React from "react";
import ReactDOM from "react-dom";
import "./ComponentCollection.css";
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";
// import variables from '../../styles/styled-components'


const Container = styled.div`
    width: 100%;
    height: 180px;
    background-color: ${props => props.theme.colors.primaryPink}
`

const GownImageMobile = styled.img`
    width: 120px;
    height: 140px;
    margin: 5px;
`

const GownImageScreen = styled.img`
    width: 120px;
    height: 140px;
    margin: 5px;
    display: none;
    @media (min-width: ${props => props.theme.breakpoints.laptop}){
        display: inline-block;
    }
`

const Title = styled.p `
    text-align: center;
    font-weight: bold;
    font-family: ${props => props.theme.fontStyles.h1Styles.fontStyle}
`
/* const image = styled. `
         width: 150px;
         height: 200px;
         margin: 20px;
     ` */

/* @media only screen and (min-width: 480px) 
    component-collection 
        width: 100%;
        height: 260px;
    ` */

const ComponentCollection = ({images}) => (
    <>
        <Container>
            <GownImageMobile src={images[0]} className='image first'></GownImageMobile>
            <GownImageMobile src={images[1]} className='image second'></GownImageMobile>
            <GownImageScreen src={images[2]} className='image third'></GownImageScreen>
            <GownImageScreen src={images[3]} className='image fourth'></GownImageScreen>
            <Title>Fall Collection 2020</Title>
        </Container>
    </>
)


export default ComponentCollection