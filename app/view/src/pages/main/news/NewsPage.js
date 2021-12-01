import Posts from "../../../components/news/posts/Posts";
import Sidebar from "../../../components/admin/Sidebar";
import { requireNewsList } from "../../../api/services";
import { useEffect, useState } from "react";


const NewsPage = props => {

    
    return (
        <div className='row'>
                    <Posts />
                    <Sidebar />
               </div> 
    )
}

export default NewsPage;