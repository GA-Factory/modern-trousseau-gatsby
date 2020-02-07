
import React from 'react';
import "../CollectionHeader/CollectionHeader.css"



const CollectionHeader = () => {
    return (
        <>
            <div class="con">
            <h5>Stay Connected</h5><br />
            <div class="some">
            <img  id="fb" src={facebook}></img>
            <img  id="in" src={instagram}></img>
            <img  id="pi" src={pinterest}></img>
            </div>
            </div>
        </>
    )
}

export default CollectionHeader