import React from 'react'
import './Footer.css'
import Logo from '../FullLogo/Logo'
import SocialMedia from '../SocialMedia/SocialMedia'
import SignUp from '../SignUp/SignUp'

const Footer = () => {
    return (
        <>
        <hr className="hr-line" />
            <div className="footer">
            <div className="spacing-1"><Logo /></div>
            <div className="spacing-2"><SignUp /></div>
            <div className="spacing"><SocialMedia /></div>
            </div>
        </>
    );
};

export default Footer