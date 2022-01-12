import React from "react"
import { NavLink } from "react-router-dom"

const MainMenu = () => {
    return (
        <ul className="nav nav-pills">
            <li className="nav-item">
                <NavLink to="/" exact className="nav-link" activeClassName="active">
                    Main
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/login" className="nav-link" activeClassName="active">
                    Login
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/users" className="nav-link" activeClassName="active">
                    Users
                </NavLink>
            </li>
        </ul>
    )
}

export default MainMenu
