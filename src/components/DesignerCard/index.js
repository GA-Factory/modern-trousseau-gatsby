import React from 'react';
import './index.css';

const Designer = (props) => (
    <div className="designerContainer">
        <img src={props.src} alt={props.alt} height={props.height} width={props.width} />
        <div className="designerParagraph">
            <p>{props.text}</p>
            <p>{props.name} | {props.title}</p>
        </div>
    </div>
);

export default Designer;
