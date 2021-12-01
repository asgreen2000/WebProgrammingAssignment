import Sidebar from "../../components/admin/Sidebar";
import ManageProduct from "../../components/admin/ManageProduct/ManageProduct";
import ProtectedRoute from "../common/ProtectedRoute";
import ManageNews from "../../components/admin/ManageNews/ManageNews";

const adminRoutes = [

    {
        path: '',
        exact: true,
        public: true,
        component: <><ProtectedRoute element = {<><Sidebar /><ManageProduct/></>} role = 'Admin'/></>
    },
    {
        path: 'news',
        exact: true,
        public: true,
        component: <><ProtectedRoute element = {<><Sidebar /><ManageNews/></>} role = 'Admin'/></>
    }
    
];



export default adminRoutes;