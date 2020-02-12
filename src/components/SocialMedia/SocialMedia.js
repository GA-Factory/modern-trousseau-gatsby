import React from "react";

import "./SocialMedia.css";

import facebook from "../Icons/facebook.png";
import instagram from "../Icons/instagram.png";
import pinterest from "../Icons/pinterest.png";

const SocialMedia = () => {
<<<<<<< HEAD
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
=======
    return (
        <>
            <div class="con">
            <h5>Stay Connected</h5><br />
            <div class="some">
            <a href="https://www.facebook.com/ModernTrousseau/" target="_blank"><img  id="fb" src={facebook}></img></a>
            <a href="https://www.instagram.com/moderntrousseaudc/" target="_blank"><img  id="in" src={instagram}></img></a>
            <a href="https://www.pinterest.com/moderntrousseau/" target="_blank"><img  id="pi" src={pinterest}></img></a>
            </div>
            </div>
        </>
    )
}
>>>>>>> 2504b42ef1ef26f8f2364e26513c3e25bbf2408f

export default SocialMedia;
