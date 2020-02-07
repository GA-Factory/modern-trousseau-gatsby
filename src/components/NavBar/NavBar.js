import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Icons from '../Icons/FAIcon';
import './NavBar.css';
import logo from './Logo/Logo.png';

const NavBar = () => (
    <Router>
        <div>
            <nav className="nav-bar">
                <div className="mobile-style">
                    {/* Replace with burger component when complete */}
                    <Link to="#">
                        <Icons name={['fas', 'bars']} size="2x" />
                    </Link>
                </div>
                <div className="mobile-style">
                    {/* Replace with logo component */}
                    <img className="mobile-logo" src={logo} alt="Modern trousseau logo" />
                </div>
                <div className="mobile-style">
                    <Link to="#">
                        <Icons name={['fas', 'search']} size="2x" />
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
