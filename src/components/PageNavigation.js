import React from 'react'
import { NavLink } from 'react-router-dom'

function PageNavigation({name}) {
    return (
        <>
        <NavLink to='/'>
            Home
        </NavLink> / { name }
        </>
    )
}

export default PageNavigation