import React from "react";
import styled from "styled-components";
import "./DressListItem.css";
import imageFile1 from "../DressListItem/DressListItemAssets/seraphina.png";

export default () => (
  <div className="one-item">
    <div className="dress-list-item-container">
      <img src={imageFile1} alt="image" />
    </div>
    <div>
      <h5 className="dress-name">{"Seraphina"}</h5>
    </div>
  </div>
);

// const DesktopCard = styled.div`
//   display: none;
//   @media (min-width: ${props => props.theme.breakpoints.tablet}) {
//     background-color: red;
//   }
// `;

// const DressListItem = props => (
//   <div>
//     <div className="primary-pink">
//       <div className="dress-list-item-container">
//         <img src={props.image1} alt="image" />
//       </div>

//       <h5 className="dress-name">{props.dressname}</h5>
//     </div>
//   </div>
// );

// export default DressListItem;

// ${props => props.theme.colors.primaryPink}
