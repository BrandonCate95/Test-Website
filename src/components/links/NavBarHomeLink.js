import React from 'react'
import { Link } from 'react-router-dom'

export const HomeLogo = () => (
    <React.Fragment>
        <span className="main-header-q">Q</span>
        U
        <span className="main-header-p">P</span>
        U
        <span className="main-header-l">L</span>
    </React.Fragment>
)

const NavBarHomeLink = (props) => (
    <Link to="/" style={{textDecoration: "none", color: "inherit"}} className={props.className}>
        <HomeLogo />
    </Link>
)

export default NavBarHomeLink