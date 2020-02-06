import React from "react";
import ReactDOM from "react-dom";
import "./ComponentCollection.css";

import imageFile1 from "./images/test-image-1.png";
import imageFile2 from "./images/test-image-2.png";
import imageFile3 from "./images/test-image-3.png";
import imageFile4 from "./images/test-image-4.png";

const images = [
    imageFile1, 
    imageFile2, 
    imageFile3, 
    imageFile4
]

const ComponentCollection = () => (
    <>
        <div className='component-collection'>
            <img src='images[0]' className='image first'></img>
            <img src='images[0]' className='image second'></img>
            <img src='images[0]' className='image third'></img>
            <img src='images[0]' className='image fourth'></img>
            <p className='collection-title'>Fall Collection 2020</p>
        </div>
    </>
)


export default ComponentCollection