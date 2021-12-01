import React from "react";
import './index.css'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const rootPath = 'admin';

function Sidebar(props){
    const location = useLocation();
    const homeClass = location.pathname === "/admin" ? "active" : "";
    const news = location.pathname === "/admin/news" ? "active" : "";
    const customer = location.pathname === "admin/contact" ? "active" : "";
    const account = location.pathname.match(/^\/account/) ? "active" : "";
    console.log("location",location);
    return (
        <div className="sidebar ">
                <ul>
                    <li><h2>AmazingFood</h2></li>
                    <li className={homeClass}><Link to="/admin"><i className="far fa-chart-bar"></i>DashBoard</Link></li>
                    <li className={news}><Link to="/admin/news"><i class="fas fa-newspaper"></i>News</Link></li>
                    <li className={customer}><Link to="/admin/contact"><i className="fas fa-users"></i>Contact</Link></li>
                    <li className={account}><Link to='/admin/account'><i className="fas fa-user"></i>Account</Link></li>
                </ul>
            </div>
    )
}

export default Sidebar;