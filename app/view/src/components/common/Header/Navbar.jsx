import React from 'react';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div id="nav">
            <div className="bar"> <FaBars /></div>

            <div className="nav_menu">
                <Link to='/'>Home</Link>
                <Link to='/about'>
                    About
                </Link>
                <Link to='/contact'>
                    Contacts
                </Link>
                <Link to='/team'>
                    Teams
                </Link>
                <Link to='/blogs'>
                    Blogs
                </Link>
            </div>

            <div className="nav_menu">

                <button><Link to='/signin'>Sign In</Link></button>
                <button><Link to='/signup'>Sign In</Link></button>

            </div>
        </div>
    )
}

export default Navbar;