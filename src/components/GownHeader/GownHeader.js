import React from "react";
import "./GownHeader.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

library.add(faSlidersH)

// let icon = (faSlidersH)

const GownHeader = (props) => {
    return <div className="GownHead">
        <h5 className="GownFont">GOWNS</h5>
        <a className="GownSlider" ><FontAwesomeIcon icon={props.icon}/></a>
        <div className="underline"></div>
    </div>
}

export default GownHeader;