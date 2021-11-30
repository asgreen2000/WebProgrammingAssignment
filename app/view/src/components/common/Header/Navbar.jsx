import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../../api/services";
import { useNavigate, useParams } from "react-router";
import { checkUserIs } from "../../../api/services";
const Navbar = props => {

    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {


        checkUserIs('User').then(
            setIsLogin
        ).catch(
            error => setIsLogin(false)
        )
    }, []);

    const handleLogOut = () => {

        logout();
    
        setIsLogin(false);
        navigate('/signin');
    }

    return <div>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><h2 class="text-warning">BUY ME SECOND</h2></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mob-navbar" aria-label="Toggle">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mob-navbar">
                <ul class="navbar-nav mb-2 mb-lg-0 mx-auto">
                    <li class="nav-item">
                        <Link class="nav-link text-white text-uppercase" to="/">Trang chủ</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-white text-uppercase" to="">Về chúng tôi</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-white text-uppercase" to="">Liên hệ</Link>
                    </li>
                </ul>
                <ul className='"navbar-nav mb-2 mb-lg-0 d-flex flex-column flex-md-row'>
                    <button className='btn btn-info'><i class="fas fa-cart-plus"></i></button>
                    {
                        !isLogin ? 
                        <>
                        <li className='nav-item'>
                        <Link class="nav-link text-white" to="">Đăng nhập</Link>
                        </li>
                        <li className='nav-item'>
                            <Link class="nav-link text-white" to="">Đăng ký</Link>
                        </li>
                        </>:
                        <button onClick={() => handleLogOut()}>Dang xuat</button>
                    }
                </ul>
            </div>
        </div>
    </nav>
    </div>

}

export default Navbar;