import Posts from '../../../components/news/posts/Posts';
import Navbar from '../../../components/common/Header/Navbar';
import Footer from '../../../components/common/Footer/Footer';

import './homepage.css';

export default function Homepage() {
    return (
        <>
            <Navbar/>
            <div className="home">
                <Posts />
            </div>
            <Footer/>
        </>
    )
}
