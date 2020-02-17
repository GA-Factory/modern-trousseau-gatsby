import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import NavBar from '../components/NavBar/NavBar';
import Layout from '../global/Layout';
import Footer from '../components/Footer/Footer';
import HeaderNavBar from '../components/HeaderNavBar/HeaderNavBar';


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
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  border: 1px solid #080808;
  background: rgba(68, 31, 14, 0.2);
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;

`;

const Nav = styled.nav`
  @media screen and (max-width: 768px){
    display: none;
  }
`;

const VisitUs = () => (
    <Layout>
        <NavBar />
        <Nav>
          <HeaderNavBar />
        </Nav>
        <main>
            <div>
                <Wrapper>
                  <Title>MODERN TROUSSEAU RETAILERS</Title>
                  <p>VISIT A FLAGSHIP</p>
                </Wrapper>
            </div>
        </main>
        <footer>
          <Bottom>
            <Footer />
          </Bottom>
        </footer>
    </Layout>
  );

export default VisitUs;
