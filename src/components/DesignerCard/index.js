import React from 'react';
import './index.css';

const Designer = (props) => (
    <div className="designerContainer">
        <img className="designerImage" src={props.src} alt={props.alt} height={props.height} width={props.width} left={props.left} top={props.top} />
        <div className="designerParagraph">
            <p>{props.text}</p> <br></br>
            <p>{props.name} | {props.title}</p>
        </div>
    </div>
);

export default Designer;
