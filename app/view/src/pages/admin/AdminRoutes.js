import Sidebar from "../../components/admin/Sidebar";
import ManageProduct from "../../components/admin/ManageProduct/ManageProduct";
import ProtectedRoute from "../common/ProtectedRoute";
import ManageNews from "../../components/admin/ManageNews/ManageNews";
import ManageContact from "../../components/admin/ManageContact/ManageContact";
import AccountDetails from "../main/accountDetail";
import ManageAccount from "../../components/admin/ManageAccount/ManageAccount";

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
    },
    {
        path: 'contact',
        exact: true,
        public: true,
        component: <><ProtectedRoute element = {<><Sidebar /><ManageContact/></>} role = 'Admin'/></>
    },
    {
        path: 'account',
        exact: true,
        public: true,
        component: <><ProtectedRoute element = {<><Sidebar /><ManageAccount/></>} role = 'Admin'/></>
    },
    {
        path: 'account-details',
        exact: true,
        public: true,
        component: <><ProtectedRoute element = {<><Sidebar /><AccountDetails /></>} role = 'Admin'/></>
    }

];



export default adminRoutes;