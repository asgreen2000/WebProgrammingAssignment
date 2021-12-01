import Navbar from "../../components/common/Header/Navbar";
import Footer from "../../components/common/Footer/Footer";
import Home from './Home';
import Cart from "../../components/main/Cart/Cart";
import About  from "../../components/main/About/about.page";
import Contact from "../../components/main/Contacts";
import SignUp from "../common/Signup";
import Signin from '../common/Signin';
import NewsPage from "../main/news/NewsPage";
import Blogs from "./blogs";
import SinglePost from "../../components/news/singlePost/SinglePost";
import ForgotPassword from "../common/ForgotPassword"
import AccountDetails from "./accountDetail";
import ProtectedRoute from "../common/ProtectedRoute"

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

    },
    {
        path: 'news/post/:id',
        exact: true,
        public: true,
        component:<><Navbar /> <SinglePost /><Footer /></>

    }, {
        path: 'forgot-password',
        exact: true,
        public: true,
        component:<><ForgotPassword /><Footer /></>
    }, {
        path: 'account-details',
        exact: true,
        public: true,
        component: <ProtectedRoute element = {<><Navbar /><AccountDetails /><Footer /></>} role = "User"/>
    }
]


export default MainRoutes;