import Posts from "../../../components/main/News/Posts";
import Sidebar from "../../../components/main/News/Sidebar";

const NewsPage = props => {


    return (
        <div className='row'>
                    <Posts />
                    <Sidebar />
               </div> 
    )
}

export default NewsPage;