import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import Logo from "../assets/logo.jpg";
import "../css/navbar.css";
function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <Logo/>
                    <NavLink exact to="/home" className="nav-logo">
                        Doc-Chain
                    </NavLink>
                    
                    <ul className={
                        click ? "nav-menu active" : "nav-menu"
                    }>
                        <li className="nav-item">
                            <NavLink exact to="/home"
                                className={
                                    ({isActive}) => (isActive ? "active" : "nav-links")
                                }
                                onClick={handleClick}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/upload"
                                className={
                                    ({isActive}) => (isActive ? "active" : "nav-links")
                                }
                                onClick={handleClick}>
                                Upload
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/display"
                                className={
                                    ({isActive}) => (isActive ? "active" : "nav-links")
                                }
                                onClick={handleClick}>
                                Display
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/admin"
                                className={
                                    ({isActive}) => (isActive ? "active" : "nav-links")
                                }
                                onClick={handleClick}>
                                Admin
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon"
                        onClick={handleClick}>
                        <i className={
                            click ? "fas fa-times" : "fas fa-bars"
                        }></i>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;