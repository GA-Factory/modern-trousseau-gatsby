import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab, fas, far)

const Icons = (props) => (
    <div>
        <FontAwesomeIcon icon = {props.name} size = {props.size}/>
    </div>
)

export default Icons;