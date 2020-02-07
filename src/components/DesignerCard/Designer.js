import React from 'react';
import './Designer.css';

const Designer = (props) => (
    <div className="designerContainer">
        <img className="designerImage" src={props.src} alt={props.alt} />
        <div className="designerParagraph">
            <p>{props.text}</p>
            <br />
            <p className="designerTitle">
{props.name}
{' '}
|
{' '}
{props.title}
            </p>
        </div>
    </div>
);

export default Designer;
