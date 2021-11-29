import Navbar from "../../components/common/Header/Navbar";
import ProtectedRoute from "../common/ProtectedRoute";
import Footer from "../../components/common/Footer/Footer";
import Home from './Home';
import Cart from "../../components/main/Cart/Cart";
const MainRoutes = [

    {
        path: '',
        exact: true,
        public: true,
        component: <><Navbar /><Cart /> <Home /> <Footer /></>
    }
]


export default MainRoutes;