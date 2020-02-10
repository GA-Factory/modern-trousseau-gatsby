import React from "react";
import "./Footer.css";
import Logo from "../FullLogo/Logo";
import SocialMedia from "../SocialMedia/SocialMedia";
import SignUp from "../SignUp/SignUp";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Logo />
        <SignUp />
        <SocialMedia />
      </div>
    </>
  );
};

export default Footer;
