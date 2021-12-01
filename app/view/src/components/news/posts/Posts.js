import Post from "../post/Post"
import "./posts.css"
import { requireNewsList } from "../../../api/services";
import { useEffect, useState } from "react";

const Posts = () => {

    const [newsList, setNewList] = useState([]);


    useEffect(() => {

        requireNewsList(setNewList);

        console.log(newsList);
    }, []);



    return (
        <div className="posts row">
            <h1 className='text-black-50 mb-5'>{"HOME >> NEWS"}</h1>
            {
                newsList.map((news, index) => {


                    return  <div className='col-12 col-md-6 col-xl-4' key = {index}><Post img={news.image} 
                    topic={news.topic} title={news.title} time= {news.time} content={news.content} id={news.id}
                    /> </div>
                })
            }
            

        </div>
    )
}

export default Posts;
