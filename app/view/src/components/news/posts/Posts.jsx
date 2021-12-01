import Post from "../post/Post"
import "./posts.css"
import $ from 'jquery';
import { useState, useEffect } from "react";

function Posts() {
    const [news, setNews] = useState([]);
    const addNews = (item) => {
        setNews([...news, {
            id: item.id,
            title: item.title,
            content: item.content,
            subject: item.subject,
            image: item.image,
            postTime: item.postTime,
        }])
    }
    const displayData = () => {
        $.ajax({
            url: 'http://localhost/assi/app/controller/news/read.php',
            type: "GET",
            success: function (data) {
                data.map((item) => addNews(item));
            },
            error: function (xhr, status, err) {
                console.log(err);
                console.log('error');
            }
        });
    };

    useEffect(() => {
        displayData()
    }, []);

    return (
        <div className="posts">
            {news.map((item) =>
                <Post
                    img={item.image}
                    topic={item.subject}
                    title={item.title}
                    time={item.postTime}
                    content={item.content}
                />
            )}
        </div>

    )
}

export default Posts;
