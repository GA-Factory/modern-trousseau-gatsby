import React from "react";
import "./GownHeader.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

library.add(faSlidersH);

const GownHeader = props => {
  return (
    <div className="GownHead">
      <div className="text-icon-wrapper">
        <h5 className="GownFont">GOWNS</h5>
        <div className="GownSlider">
          <FontAwesomeIcon icon={props.icon} />
        </div>
      </div>
      <div className="underline"></div>
    </div>
  );
};

export default GownHeader;
