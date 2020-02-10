
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../CollectionHeader/CollectionHeader.css"


library.add(faArrowLeft)
let icon = (faArrowLeft)

const collectionHeader = "Spring 2020 Collection"

const tempQuoteText = "2020 has me thinking, what isn't possible? ...brides will notice a distinct flavor to my Spring 2020 collection."

const designerFooter = "Callie Tein | Designer"


class CollectionHeader extends React.Component {
    
   render() {
       
      return ( 
         <div className="collection-card"> 
         <div className="collect-header">   
          <a className="collection-arrow">
              <FontAwesomeIcon icon={icon}/>
          </a>
          <h5 className="collection-title">{collectionHeader}</h5>    
          <div className="collection-blank"></div>
        </div>
        
          <div className="collection-content">
              <p className="collection-quote">
              {tempQuoteText}
              </p>
              <p className="collection-footer">
             {designerFooter}
              </p>
          </div>
          </div>
      )
   }
}

export default CollectionHeader;



