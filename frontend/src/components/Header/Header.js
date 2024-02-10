import React from 'react'
import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => (
    <nav className="nav">
        <div className="logo">
            <Link to="/home" className="nav-link">Movie Hub</Link>
        </div>
        <div className="nav-content">
            <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
        </div>
    </nav>
)

export default Header