import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => (
    <nav className="nav">
        <div className="logo">
            <Link to="/movies" className="nav-link">Movie Hub</Link>
        </div>
    </nav>
)

export default Header