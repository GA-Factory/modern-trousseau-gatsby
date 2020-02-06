import React from "react";
import "./Logo.css";

const Logo = props => {
  let classList = "logo-tag";

  let types = ["logo", "notag", "tagline"];

  if (types.includes(props.type)) {
    classList += ` ${props.type}`;
  }

  if (props.tagline) {
      classList += ` tagline`
  }

  if (props.notag) {
    classList += ` notag` // Note the spacing here since we are adding to the string!
}

  return (
    <>
      <div className="logo-tag">
        <div className="logo">
          <h1 className="logo-word-modern">Modern</h1>
          <h1 className="logo-word-trousseau">trousseau</h1>
        </div>
        <div className={classList}>designed & made with love in the usa</div>
      </div>
    </>
  );
};
export default Logo;
