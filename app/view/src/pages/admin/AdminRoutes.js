import Sidebar from "../../components/admin/Sidebar";
import ManageProduct from "../../components/admin/ManageProduct/ManageProduct";
import ProtectedRoute from "../common/ProtectedRoute";

const adminRoutes = [

    {
        path: '',
        exact: true,
        public: true,
        component: <><ProtectedRoute element = {<><Sidebar /><ManageProduct/></>} role = 'Admin'/></>
    }

];



export default adminRoutes;