import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/' activeStyle>Home</NavLink>
          <NavLink to='/about' activeStyle>
            <span>About </span>
          </NavLink>
          <NavLink to='/products' activeStyle>
          Products
          </NavLink>
          <NavLink to='/team' activeStyle>
            Teams
          </NavLink>
          <NavLink to='/blogs' activeStyle>
            Blogs
          </NavLink>
          </NavMenu>
         
        <NavMenu>
        <NavBtn>
          <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
        </NavBtn>
        <NavBtn>
        <NavBtnLink to='/sign-up' activeStyle>
            Sign Up
          </NavBtnLink>
        </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;