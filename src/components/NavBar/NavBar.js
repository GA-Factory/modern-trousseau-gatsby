import React from 'react';
import Icons from '../Icons/FAIcon';
import { BrowserRouter, Link } from "react-router-dom";
import './NavBar.css';
import logo from './Logo/Logo.png';

const NavBar = () => (
    <div>
        <nav className="nav-bar">
            <div className="mobile-style">
                {/* Replace with burger component when complete */}
                <Icons name={['fas', 'bars']} />
            </div>
            <div className="mobile-style">
                {/* Replace with logo component */}
                <img src={logo} height="10" width="100" alt="Modern trousseau logo" />
            </div>
            <div className="nav-icons">
                <Icons name={['fas', 'search']} />
            </div>
            <div className="desktop-style">
                <Icons name={['fas', 'map-marker-alt']} />
            </div>
            <div className="desktop-style">
                <Icons name={['far', 'user']} />
            </div>
        </nav>
    </div>
);

export default NavBar;
