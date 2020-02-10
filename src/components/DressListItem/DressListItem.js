import React from "react";
import "./DressListItem.css";

const DressListItem = props => (
  <div>
    <div className="primary-pink">
      <div className="dress-list-item-container">
        <img src={props.image1} alt="image" />
      </div>

      <h5 className="season-collection-text">
        {props.season} {props.year} Collection
      </h5>
    </div>
  </div>
);

export default DressListItem;
