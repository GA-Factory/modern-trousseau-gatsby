import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './HeaderNavBar.css';


const HeaderNavBar = () => (
    <Router>
        <div>
            <nav className="header-nav">
                <ul>
                    <li>
                        <p>OUR GOWNS</p>
                        <span className="dots">&#9679;</span>
                    </li>
                    <li>
                        <p>VISIT US</p>
                        <span className="dots">&#9679;</span>
                    </li>
                    <li>
                        <p>BOOK AN APPOINTMENT</p>
                        <span className="dots">&#9679;</span>
                    </li>
                    <li>
                        <p>ABOUT US</p>
                    </li>
                </ul>
            </nav>
        </div>
    </Router>
);

export default HeaderNavBar;
