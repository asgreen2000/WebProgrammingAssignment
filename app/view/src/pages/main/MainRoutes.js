import Navbar from "../../components/common/Header/Navbar";
import ProtectedRoute from "../common/ProtectedRoute";
import Footer from "../../components/common/Footer/Footer";
import Home from './Home';
import Cart from "../../components/main/Cart/Cart";
import About  from "../../components/main/About/about.page";
import Contact from "../../components/main/Contacts";
const MainRoutes = [

    {
        path: '',
        exact: true,
        public: true,
        component: <><Navbar /><Cart /> <Home /> <Footer /></>
    },
    {
        path: '/about',
        exact: true,
        public: true,
        component:<><Navbar /> <About /><Footer /></>

    },    {
        path: '/contact',
        exact: true,
        public: true,
        component:<><Navbar /> <Contact /><Footer /></>

    },
]


export default MainRoutes;