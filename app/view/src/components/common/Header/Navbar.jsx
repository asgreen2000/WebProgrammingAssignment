import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import { checkUserIs } from '../../../api/services';
import { logout } from '../../../api/services';

const Navbar = () => {

    const [isLogin, setLogin] = useState(false);

    useEffect(() => {

        checkUserIs("User").then(isLogin => {
            setLogin(isLogin)
        })
        .catch(error => setLogin(false))


    }, []);

    const handleSignOut = event => {


        event.preventDefault();

        logout();
        setLogin(false);
        
    }

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
                <Link to='/news'>
                    News
                </Link>
                <Link to='/blogs'>
                    Blogs
                </Link>
            </div>

            <div className="nav_menu">

            {/* <button className='btn btn'><i class="fas fa-shopping-cart"></i></button> */}
            
                {
                    !isLogin ? 
                    <>
                        <button><Link to='/signin'>Sign In</Link></button>
                        <button><Link to='/signup'>Sign Up</Link></button>
                    </>
                    :
                    <button onClick={handleSignOut}>Sign Out</button>
                }
               

            </div>
        </div>
    )
}

export default Navbar;