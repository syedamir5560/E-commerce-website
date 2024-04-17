import React from 'react'
import { NavLink } from 'react-router-dom'

function PageNavigation({name}) {
    return (
      <div style={{width:'12vw',height:'10vh',padding:'25px',fontSize:'15px'}}>
         <NavLink to='/'>
            Home
        </NavLink> / { name }
      </div>
    )
}

export default PageNavigation