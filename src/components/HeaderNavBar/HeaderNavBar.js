import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './HeaderNavBar.css';
import Logo from "../FullLogo/Logo";



const HeaderNavBar = () => (
    <Router>
        <div>
            <nav className="header-nav">
                <section className="header-nav-logo">
                    <Logo notag />
                </section>
                <ul>
                    <li className="header-nav-li">
                        <p>OUR GOWNS</p>
                    </li>
                    <li className="header-nav-li">
                        <span className="header-nav-dots">&#183;</span>
                    </li>
                    <li className="header-nav-li">
                        <p>VISIT US</p>
                    </li>
                    <li className="header-nav-li">
                        <span className="header-nav-dots">&#183;</span>
                    </li>
                    <li className="header-nav-li">
                        <p>BOOK AN APPOINTMENT</p>
                    </li>
                    <li className="header-nav-li">
                        <span className="header-nav-dots">&#183;</span>
                    </li>
                    <li className="header-nav-li">
                        <p>ABOUT US</p>
                    </li>
                </ul>
            </nav>
        </div>
    </Router>
);

export default HeaderNavBar;
