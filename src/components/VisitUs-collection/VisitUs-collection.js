import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Collection = styled.div`
  display: flex;
  width: 100%;
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
  height: 170px;
  width: 145px;
`;

const VisitGrid = styled.div`
    display: inline-block;
    flex-flow: wrap;
    padding: 10px;
    margin: 50px;
    align-items: center;
    text-align: center;
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
`;

const StoreCollection = (props) => {
  const { nodes } = props.data.allContentfulStore;
  console.log(nodes);
  const store = nodes.map((stores, index) => (
        <VisitGrid key={index}>
            <div>
                {/* <ImgStyle fluid={stores.image.fluid.src} /> */}
                <p>Modern Trousseu {stores.city}</p>
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
                    {/* <ImgStyle fluid={nodes[0].image.fluid} />
                    <City>{nodes[0].city}</City>
                    <p>{nodes[0].streetAddress.streetAddress}</p>
                    <p>{nodes[0].city}</p>
                    <p>{nodes[0].zip}</p>
                    <p>{nodes[0].state}</p>
                    <p>{nodes[0].email}</p> */}
                    <div>{store}</div>
                </Container>
            </Collection>
    </>
  );
};

export default StoreCollection;
