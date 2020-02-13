
import React from 'react';
import styled from "styled-components"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../CollectionHeader/CollectionHeader.css";




const CollectionCard = styled.section`
    width: 100%;
    height: 190px;
    background-color: #FAE5DC;
    display: grid;  
    grid-template-columns: 1fr;

    @media (min-width: ${props => props.theme.breakpoints.tablet }) {
    background-color: transparent;
    }
`;

const CollectHeader = styled.div`
    margin-top: 36px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-basis: calc(100% - 24px);
    white-space: nowrap;

    @media (min-width: ${props => props.theme.breakpoints.tablet }) {
        text-align: center;
        justify-content: center;
    
    }
`;

const CollectionArrow = styled.p`
    margin: 6px 0 0 15px;
    font-weight: none;
    flex-basis: 12px;
    margin-bottom: 7px;

    @media (min-width: ${props => props.theme.breakpoints.tablet }) {
        display: none;

    }
`;   

const CollectionBlank = styled.p` 
    height: 12px;
    flex-basis: 12px;

    @media (min-width: ${props => props.theme.breakpoints.tablet }) {

    }
`;

const CollectionTitle = styled.p`
    height: 26px;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    font-size: 23px;
    line-height: 21px;
    text-align: center;
    color: #000000;
    margin-left: -15px;

    @media (min-width: ${props => props.theme.breakpoints.tablet }) {

    }
`;

const CollectionContent = styled.div`
text-align: center;
margin-top: 20px;

@media (min-width: ${props => props.theme.breakpoints.tablet }) {

}
`;

const CollectionQuote = styled.p`  
padding: 0 20px;    
font-size: 15px;    
text-align: center;
font-family: 'Raleway', sans-serif;

@media (min-width: ${props => props.theme.breakpoints.tablet }) {
    display: none;

}
`;
const CollectionFooter = styled.p`
margin-top: 20px;    
text-align: center;    
font-size: 15px;    
font-family: 'Raleway', sans-serif;

@media (min-width: ${props => props.theme.breakpoints.tablet }) {
    display: none;

}
`;


library.add(faArrowLeft)
let icon = (faArrowLeft)

const collectionHead = "Spring 2020 Collection"

const tempQuoteText = "2020 has me thinking, what isn't possible? ...brides will notice a distinct flavor to my Spring 2020 collection."
const designerFooter = "Callie Tein | Designer"


class CollectionHeader extends React.Component {
    
   render() {
       
      return ( 
         <CollectionCard> 
            <CollectHeader>   
                <CollectionArrow>  
                    <FontAwesomeIcon icon={icon}/>
                </CollectionArrow>
          <CollectionTitle>{collectionHead}</CollectionTitle>    
          <CollectionBlank></CollectionBlank>
        </CollectHeader>
        
          <CollectionContent>
              <CollectionQuote>
              {tempQuoteText}
              </CollectionQuote>
              <CollectionFooter>
             {designerFooter}
              </CollectionFooter>
          </CollectionContent>
          </CollectionCard>
      )
   }
}

export default CollectionHeader;

