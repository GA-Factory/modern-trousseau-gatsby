import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Icons from '../Icons/FAIcon';



const Collection = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  overflow: auto;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    height: 360px;
    padding: 30px 10px 10px 10px;
  }
`;

const Container = styled.div`
  display: flex;
  width: 0 auto;
  height: auto;
  padding: 20px;
  margin: 0px 10%;
  text-align: center;
  justify-content: space-evenly;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    height: 280px;
    padding: 10px 10px 10px 10px;
  }
`;

const ImgStyle = styled(Img)`
  width: 413.56px;
  height: 223px;
  margin: 10px auto;
  @media screen and (max-width: 425px) {
    height: 200px;
    width: 200px;
  }
`;

const VisitGrid = styled.div`
    display: inline-block;
    flex-flow: wrap;
    padding: 10px;
    margin: 30px;
    align-items: center;
    /* text-align: center; */
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
`;
const Store = styled.div`
  height: 100%;
`;

const StoreCollection = (props) => {
  const { nodes } = props.data.allContentfulStore;
  console.log(nodes);
  const store = nodes.map((stores, index) => (
        <VisitGrid key={index}>
            <div>
                {stores.image ? <ImgStyle fluid={stores.image.fluid} /> : null}
                <div>
                <p><Icons name={['fas', 'map-marker-alt']} size='xs'/> Modern Trousseau {stores.city}</p></div>
                <p>{stores.streetAddress.streetAddress}</p>
                <p>{stores.city}, {stores.state} {stores.zip} </p>
                <p>{stores.phoneNumber}</p>
                <p>{stores.email}</p>
            </div>
        </VisitGrid>
    )
    );
  return (
    <>
            <Collection>
                <Container>
                    <Store>{store}</Store>
                </Container>
            </Collection>
    </>
  );
};

export default StoreCollection;
