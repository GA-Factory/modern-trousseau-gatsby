import React from "react";
import ReactDOM from "react-dom";
import "./ComponentCollection.css";

const ComponentCollection = ({images}) => (
    <>
        <div className='component-collection'>
            <img src='images[0]' className='image'></img>
            <img src='images[0]' className='image'></img>
            <img src='images[0]' className='image'></img>
            <img src='images[0]' className='image'></img>
            <p className='collection-title'>Fall Collection 2020</p>
        </div>
    </>
)


export default ComponentCollection