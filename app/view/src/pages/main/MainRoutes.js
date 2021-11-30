import Navbar from "../../components/common/Header/Navbar";
// import ProtectedRoute from "../common/ProtectedRoute";
import Footer from "../../components/common/Footer/Footer";
import Home from './Home';
import Cart from "../../components/main/Cart/Cart";
import About  from "../../components/main/About/about.page";
import Contact from "../../components/main/Contacts";
import SignUp from "./signup";
import Signin from './signin';
import NewsPage from "../main/news/NewsPage";
import Signout from './signout';
import Blogs from "./blogs";

const MainRoutes = [

    {
        path: '',
        exact: true,
        public: true,
        component: <><Navbar /><Cart /> <Home /> <Footer /></>
    },
    {
        path: 'news',
        exact: true,
        public: true,
        component: <>
            <Navbar />
                <Cart /> 
                <NewsPage />
            <Footer />
        </>
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
        component: <Signout />
    }, {
        path: 'about',
        exact: true,
        public: true,
        component:<><Navbar /> <About /><Footer /></>

    },
    {
        path: 'contact',
        exact: true,
        public: true,
        component:<><Navbar /> <Contact /><Footer /></>

    },
    {
        path: 'blogs',
        exact: true,
        public: true,
        component:<><Navbar /> <Blogs /><Footer /></>

    }
]


export default MainRoutes;