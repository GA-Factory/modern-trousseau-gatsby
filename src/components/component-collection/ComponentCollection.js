import React from "react";
import ReactDOM from "react-dom";
import "./ComponentCollection.css";

const ComponentCollection = ({images}) => (
    <>
        <div className='component-collection'>
            <img src={images[0]} className='image first'></img>
            <img src={images[1]} className='image second'></img>
            <img src={images[2]} className='image third'></img>
            <img src={images[3]} className='image fourth'></img>
            <p className='collection-title'>Fall Collection 2020</p>
        </div>
    </>
)


export default ComponentCollection