import React from "react";
import './index.css'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function Sidebar(props){
    const location = useLocation();
    const homeClass = location.pathname === "/" ? "active" : "";
    const news = location.pathname.match(/^\/news/) ? "active" : "";
    const product = location.pathname.match(/^\/product/) ? "active" : "";
    const customer = location.pathname.match(/^\/customer/) ? "active" : "";
    const account = location.pathname.match(/^\/account/) ? "active" : "";
    return (
        <div className="sidebar">
                <ul>
                    <li><h2>AmazingFood</h2></li>
                    <li className={homeClass}><Link to="/"><i className="far fa-chart-bar"></i>DashBoard</Link></li>
                    <li className={news}><Link to="/news"><i class="fas fa-newspaper"></i>News</Link></li>
                    <li className={product}><Link to="/product"><i className="fas fa-shopping-basket"></i>Product</Link></li>
                    <li className={customer}><Link to="/customer"><i className="fas fa-users"></i>Customer</Link></li>
                    <li className={account}><Link to='/account'><i className="fas fa-user"></i>Account</Link></li>
                </ul>
            </div>
    )
}

export default Sidebar;