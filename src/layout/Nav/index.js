import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Nav = () => {
    return (
        <nav>
            <NavLink exact to="/" activeClassName="selected">Home</NavLink>
            <NavLink exact to="/Little_Simz" activeClassName="selected">Little Simz</NavLink>
            <NavLink exact to="/activity" activeClassName="selected">Random Activity</NavLink>
            <NavLink exact to="/location" activeClassName="selected">Find My Location</NavLink>
        </nav>
    )
}

export default Nav;
