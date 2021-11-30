import React from "react";
import './index.css'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const rootPath = 'admin';

function Sidebar(props){
    const location = useLocation();
    const homeClass = location.pathname === "/" ? "active" : "";
    const news = location.pathname.match(/^\/news/) ? "active" : "";
    const customer = location.pathname.match(/^\/customer/) ? "active" : "";
    const account = location.pathname.match(/^\/account/) ? "active" : "";
    return (
        <div className="sidebar ">
                <ul>
                    <li><h2>AmazingFood</h2></li>
                    <li className={homeClass}><Link to="/admin"><i className="far fa-chart-bar"></i>DashBoard</Link></li>
                    <li className={news}><Link to="/admin/news"><i class="fas fa-newspaper"></i>News</Link></li>
                    <li className={customer}><Link to="/admin/customer"><i className="fas fa-users"></i>Contact</Link></li>
                    <li className={account}><Link to='/admin/account'><i className="fas fa-user"></i>Account</Link></li>
                </ul>
            </div>
    )
}

export default Sidebar;