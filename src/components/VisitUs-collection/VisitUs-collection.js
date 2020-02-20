import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Collection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    height: 360px;
    padding: 30px 10px 10px 10px;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding: 20px;
  margin: 10px;
  justify-content: space-evenly;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    height: 280px;
    padding: 10px 10px 10px 10px;
  }
`;

const City = styled.p`
  text-align: center;
  font-weight: bold;
  margin-bottom: 15px;
  font-family: ${(props) => props.theme.fontStyles.h1Styles.fontStyle};
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-family: ${(props) => props.theme.fontStyles.h3Styles.fontStyle};
    font-size: ${(props) => props.theme.fontStyles.h3Styles.fontSize};
    margin-top: 10px;
  }
`;

const ImgStyle = styled(Img)`
  height: 170px;
  width: 145px;
`;

const StoreCollection = (props) => {
  const { nodes } = props.data.allContentfulStore;
  console.log(nodes);
  const store = nodes.map((stores, index) =>
    // eslint-disable-next-line no-unused-expressions
      (
        <div key={index}>
            {/* <ImgStyle fluid={stores.image.fluid} /> */}
            <p>{stores.email}</p>
            <p>{stores.phoneNumber}</p>
            <p>{stores.streetAddress.streetAddress}</p>
            <p>{stores.city}</p>
            <p>{stores.zip}</p>
            <p>{stores.state}</p>
        </div>
    )
    );
  return (
    <>
      <Collection>
        <Container>
            <div>
                {/* <ImgStyle fluid={nodes[0].image.fluid} />
                <City>{nodes[0].city}</City>
                <p>{nodes[0].streetAddress.streetAddress}</p>
                <p>{nodes[0].city}</p>
                <p>{nodes[0].zip}</p>
                <p>{nodes[0].state}</p>
                <p>{nodes[0].email}</p> */}
            <div>{store}</div>
            </div>
        </Container>
      </Collection>
    </>
  );
};

export default StoreCollection;
