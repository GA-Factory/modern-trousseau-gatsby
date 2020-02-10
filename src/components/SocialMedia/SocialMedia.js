import React from "react";

import "./SocialMedia.css";

import facebook from "../Icons/facebook.png";
import instagram from "../Icons/instagram.png";
import pinterest from "../Icons/pinterest.png";

const SocialMedia = () => {
  return (
    <>
      <div class="con">
        <h5>Stay Connected</h5>
        <div class="some">
          <img id="fb" src={facebook}></img>
          <img id="in" src={instagram}></img>
          <img id="pi" src={pinterest}></img>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
