import Navbar from "../../components/common/Header/Navbar";
// import ProtectedRoute from "../common/ProtectedRoute";
import Footer from "../../components/common/Footer/Footer";
import Home from './Home';
import Cart from "../../components/main/Cart/Cart";
import Signin from './signin';
import SignUp from "./signup";
import SignOut from "./signout"

const MainRoutes = [

    {
        path: '',
        exact: true,
        public: true,
        component: <><Navbar /><Cart /> <Home /> <Footer /></>
    },
    {
        path: 'signin',
        exact: true,
        public: true,
        component: <><Signin /><Footer /></>
    },
    {
        path: 'signup',
        exact: true,
        public: true,
        component: <><SignUp /><Footer /></>
    },
    {
        path: 'signout',
        exact: true,
        public: true,
        component: <SignOut />
    }
]


export default MainRoutes;