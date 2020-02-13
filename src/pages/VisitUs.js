import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar/NavBar';
import Layout from '../global/Layout';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: 10px auto;
`;

const Title = styled.div`
  margin: 20px;
  padding: 05px;
  font-family: Raleway;
  font-weight: bold;
  font-size: 18px;
  border: 1px solid #080808;
  background: rgba(68, 31, 14, 0.2);
`

const VisitUs = () => (
    <Layout>
        <NavBar />
        <main>
            <div>
                <Wrapper>
                  <Title>MODERN TROUSSEAU RETAILERS</Title>
                  <p>VISIT A FLAGSHIP</p>
                </Wrapper>
            </div>
        </main>
    </Layout>
  );

export default VisitUs;
