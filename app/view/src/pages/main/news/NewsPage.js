import posts from "../../../components/news/posts/Posts";
import Sidebar from "../../../components/admin/Sidebar";
const NewsPage = props => {


    return (
        <div className='row'>
                    <posts />
                    <Sidebar />
               </div> 
    )
}

export default NewsPage;