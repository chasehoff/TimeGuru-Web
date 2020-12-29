import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './index.css';

function Navigation() {
    return (
        <nav className="nav-container">
            <img className="nav-container-logo" src="./images/text_logo.svg" alt="Company Logo" />
            <ul className="nav-item-list">
                <NavLink className="no-underline" activeClassName="active" exact to="/">
                    <li className="nav-link">Home</li>
                </NavLink>
                <NavLink className="no-underline" activeClassName="active" to="/about">
                    <li className="nav-link">About</li>
                </NavLink>
                <NavLink className="no-underline" activeClassName="active" to="/pricing">
                    <li className="nav-link">Pricing</li>
                </NavLink>
                <NavLink className="no-underline" activeClassName="active" to="/contact">
                    <li className="nav-link">Contact</li>
                </NavLink>
                <NavLink className="no-underline" activeClassName="active" to="/faq">
                    <li className="nav-link">FAQ</li>
                </NavLink>
                <NavLink activeClassName="no-underline" className="no-underline" to="/login">
                    <li id="nav-link-special" className="nav-link">Login/Signup</li>
                </NavLink>
            </ul>
        </nav>
    )
}
export default Navigation;