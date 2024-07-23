import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <nav className="nav-bar">
           <div className="logo">Nishanth B M</div>
           <ul className="nav-links">
            <li>   <a href="#About">About</a></li>
            <li>   <a href="#Experience">Experience</a></li>
            <li>   <a href="#Projects">Projects</a></li>
            <li>   <a href="#Contact">Contact</a></li>
            </ul>
            </nav>
    )
}

export default Header;