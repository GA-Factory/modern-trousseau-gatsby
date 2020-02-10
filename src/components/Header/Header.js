import React from 'react'

import NavMenu from '../NavMenu/NavMenu'
import Logo from '../FullLogo/Logo'
import './Header.css'



const Header = () => {
    return (
        <>
        <div className="header">
            <div className="MobNav">
                <Logo notag/>
            </div>
            <div className="Nav">
                <NavMenu />
            </div>
        </div>
        </>
  )
  }
  
  export default Header