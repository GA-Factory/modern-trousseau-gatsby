import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


library.add(fas);

const Burger = (props) => (
    <div>
        <FontAwesomeIcon icon={props.name} onClick={props.onClick} />
    </div>
);

export default Burger;
