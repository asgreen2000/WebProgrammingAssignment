import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import './Navbar.css';
import {checkUserIs} from "../../../api/services"

const Navbar = props => {
    const [isLogin, setIsLogin] = useState(false)
    const [styles,setStyles] = useState(
        {
            boxShadow: '',
            backgroundColor: 'white',
            height: '90px'
        }
    )
    useEffect(() => {
        document.addEventListener("scroll", (e) => {
            var scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 100) {
                setStyles({
                    boxShadow: '0 1px 3px rgb(50 50 50 / 40%)',
                    backgroundColor: '#7790d9',
                    height: '80px'
                });
            } else {
                setStyles({ boxShadow: '', backgroundColor: 'white', height: '90px' })
            }
        });
        checkUserIs("User").then(isLogin => {
            setIsLogin(isLogin)
        })
    }, []);




    return (

        <div id="navbar" className='fixed-top d-flex row-remove'
            style={{
                boxShadow: styles.boxShadow,
                backgroundColor: styles.backgroundColor,
                height: styles.height,
                transition: 'smooth'
            }}
        >
            <img id="nav-logo" src="/images/buymeFirst-1.png" alt="" className="logo col-3" />

            <div className="main-routes d-flex justify-content-center col-5">
                <div className='d-flex'>

                    <Link to='/'><i className="fas fa-home">&nbsp;</i>Trang chủ</Link>
                </div>

                <div className='d-flex'>

                    <Link to='/news'><i className="fas fa-home">&nbsp;</i>Tin tức</Link>
                </div>
            </div>

            <div className="auth-routes d-flex col-4 justify-content-end">
                <div className='cart-btn'>
                    <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <i className="fas fa-shopping-cart" style={{ position: "relative" }}>
                            {1 > 0 ? <span style={{ color: "red", position: "absolute", top: "-10px", right: "-10px" }}>{2}</span> : null}
                        </i>
                    </button>
                </div>

                {!isLogin ?
                    <>
                        <div className=''>
                            <Link to='/signin'> <i id="icon-sign-in" class="fas fa-sign-in-alt" ></i><div id="text-sign-in">Đăng nhập</div></Link>
                        </div>
                        <div className=''>
                            <Link to='/signup'><i id="icon-register" class="fas fa-edit"></i><div id="text-register">Đăng ký</div></Link>
                        </div>
                    </> : <>
                        <div className="dropdown">
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="far fa-user"></i>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li className='dropdown-item'>
                                    <Link to='/account-details'>Thông tin tài khoản</Link>
                                </li>
                                <li className='dropdown-item'>
                                    <Link to='/signout' >Đăng xuất</Link>
                                </li>
                            </ul>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;
