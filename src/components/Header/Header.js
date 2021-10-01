import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const activeStyle = {
    fontWeight: "bold",
    color: "#FF1493"
}

const Header = () => {
    return (
        <nav className="d-flex mx-auto w-25">
            <NavLink className="nav-link" activeStyle={activeStyle} to='/restaurent'>Restaurent</NavLink>
            <NavLink className="nav-link" activeStyle={activeStyle} exact to='/about' >About</NavLink>
            <NavLink className="nav-link" activeStyle={activeStyle} exact to='/about/culture' >Culture</NavLink>
        </nav>
    );
};

export default Header;