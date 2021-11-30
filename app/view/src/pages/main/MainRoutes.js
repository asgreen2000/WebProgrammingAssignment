import Navbar from "../../components/common/Header/Navbar";
import ProtectedRoute from "../common/ProtectedRoute";
import Footer from "../../components/common/Footer/Footer";
import Home from './Home';
import Cart from "../../components/main/Cart/Cart";
import NewsPage from "./news/NewsPage";
import About from "./about/about.page";


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
        path: 'about',
        exact: true,
        public: true,
        component: <>
            <Navbar />
                <Cart/> 
                <About />
            <Footer />
        </>
    }
]


export default MainRoutes;