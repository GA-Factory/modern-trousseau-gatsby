import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Logo from '../FullLogo/Logo';

const HeaderNav = styled.nav`
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    background-color: #FAE5DC;
    width: 100vw;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`;

const HeaderLogo = styled.div`
    padding: 30px 20px;
    margin-top: 30px;
    font-size: 64px;
`;

const UL = styled.ul`
    display: flex;
    flex-flow: row;
`;

const LiHeader = styled.li`
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;


const HeaderNavBar = () => (
    <Router>
        <div>
            <HeaderNav>
                <HeaderLogo>
                    <Logo notag tagline title1="MODERN" title2="trousseau" />
                </HeaderLogo>
                <UL>
                    <LiHeader>
                        <p>OUR GOWNS</p>
                    </LiHeader>
                    <LiHeader>
                        <span className="header-nav-dots">&#183;</span>
                    </LiHeader>
                    <LiHeader>
                        <p>VISIT US</p>
                    </LiHeader>
                    <LiHeader>
                        <span className="header-nav-dots">&#183;</span>
                    </LiHeader>
                    <LiHeader>
                        <p>BOOK AN APPOINTMENT</p>
                    </LiHeader>
                    <LiHeader>
                        <span className="header-nav-dots">&#183;</span>
                    </LiHeader>
                    <LiHeader>
                        <p>ABOUT US</p>
                    </LiHeader>
                </UL>
            </HeaderNav>
        </div>
    </Router>
);

export default HeaderNavBar;
