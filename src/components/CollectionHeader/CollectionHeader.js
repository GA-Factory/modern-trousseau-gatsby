
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
         <div className="collection-card"> 
         <div className="collect-header">   
          <a className="collection-arrow">
              <FontAwesomeIcon icon={icon}/>
          </a>
          <h5 className="collection-title">Spring 2020 Collection</h5>    
          </div>
          <div className="collection-content">
              <p classname="collection-quote">"2020 has me thinking, what isn't <br/> possible? ...brides will notice a distinct flavor to<br/> my Spring 2020 collection."</p>
              <p className="collection-footer">
                  Callie Tein | Designer
              </p>
          </div>
          </div>
      )
   }
}

export default CollectionHeader;

// {/* <FontAwesomeIcon icon = {['fas', 'arrow-left']} size = 'xs'/> */}

