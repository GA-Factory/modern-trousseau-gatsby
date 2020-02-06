import React from 'react'
import './Footer.css'
import Logo from '../FullLogo/Logo'
import Icons from '../Icons/FAIcon'

const Footer = () => {
    return (
        <>
        <div className="footer">
            <Logo />
            <div className="rest">
            <h1>Obsessed with a dress?</h1>
            
            <div className="form">
                <input placeholder="Sign up for updates"></input>
                <input type="submit" value="Submit"></input>
            </div>
            
            <h5>Stay connected</h5>

            <div className="social-media">
            <Icons name={['fab', 'facebook']}/>
            <Icons name={['fab', 'instagram']}/>
            <Icons name={['fab', 'pinterest']}/>
            </div>
            </div>
        </div>
        </>
    );
};

export default Footer