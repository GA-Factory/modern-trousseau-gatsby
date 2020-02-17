import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Icons from '../Icons/FAIcon';
import './NavBar.css';
import logo from './Logo/Logo.png';
import Logo from '../FullLogo/Logo';

const NavBar = () => (
    <Router>
        <div>
            <nav className="nav-bar">
                <div className="mobile-style">
                    {/* Replace with burger component when complete */}
                    <Link to="#">
                        <Icons name={['fas', 'bars']} size="lg" />
                    </Link>
                </div>
                <div className="mobile-style">
                    {/* Replace with logo component */}
                    <Logo notag tagline title1="MODERN" title2="trousseau" />
                </div>
                <div className="mobile-style">
                    <Link to="#">
                        <Icons name={['fas', 'search']} size="lg" />
                    </Link>
                </div>
                <div className="desktop-style">
                    <Link to="#">
                        <Icons name={['fas', 'search']} />
                    </Link>
                </div>
                <div className="desktop-style">
                    <Link to="#">
                        <Icons name={['fas', 'map-marker-alt']} />
                    </Link>
                </div>
                <div className="desktop-style">
                    <Link to="#">
                        <Icons name={['far', 'user']} />
                    </Link>
                </div>
            </nav>
        </div>
    </Router>
);

export default NavBar;
