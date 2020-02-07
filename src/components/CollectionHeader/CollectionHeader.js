
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../CollectionHeader/CollectionHeader.css"

library.add(faArrowLeft)
let icon = (faArrowLeft)


class CollectionHeader extends React.Component {
    
   render() {
       
      return (
         <div className="collect-header">
          <a className="collection-arrow">
              <FontAwesomeIcon icon={icon}/>
          </a>
          <h5 className="collection-header">Spring 2020 Collection</h5>
               
          </div>
      )
   }
}

export default CollectionHeader;

// {/* <FontAwesomeIcon icon = {['fas', 'arrow-left']} size = 'xs'/> */}

