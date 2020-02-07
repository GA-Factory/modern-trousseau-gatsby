import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const HeaderNavBar = () => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <p>OUR GOWNS</p>
                    </li>
                    <li>
                        <p>VISIT US</p>
                    </li>
                    <li>
                        <p>BOOK AN APPOINTMENT</p>
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
