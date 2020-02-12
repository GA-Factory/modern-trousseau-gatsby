import React from "react";
import "./DressListItem.css";

const DressListItem = props => (
  <div className="one-item">
    <div className="dress-list-item-container">
      <img src={props.image} alt="image" />
    </div>
    <div>
      <h5 className="dress-name">{props.dressname}</h5>
    </div>
  </div>
);

export default DressListItem;
