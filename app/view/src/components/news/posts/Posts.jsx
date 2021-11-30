import Post from "../post/Post"
import "./posts.css"
import $ from 'jquery';
import { useState, useEffect } from "react";

function posts() {
    var rows = [];
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
            url: 'http://localhost:8080/controller/news/read.php',
            type: "GET",
            dataType: "json",
            success: function (data) {
                console.log('success');
                data.map((item) => console.log(item));
                data.map((item) => rows.push(
                    <Post
                        img={item.image}
                        topic={item.subject}
                        title={item.title}
                        time={item.postTime}
                        content={item.content}
                    />
                ));
                data.map((item) => addNews(item));
                console.log(news); // will print "message"
            },
            error: function (xhr, status, err) {
                console.log(err);
                console.log('error');
            }
        });
    };


    useEffect(() => {
        displayData();
    }, []);

    return (
        <div className="posts">
            <Post
                img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                topic="Life"
                title="Lorem ipsum dolor sit amet"
                time="1 hour ago"
                content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
            fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
            atque, exercitationem quibusdam, reiciendis odio laboriosam?"
            />
            <Post
                img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                topic="Life"
                title="Lorem ipsum dolor sit amet"
                time="1 hour ago"
                content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                atque, exercitationem quibusdam, reiciendis odio laboriosam?"
            />
            <Post
                img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                topic="Life"
                title="Lorem ipsum dolor sit amet"
                time="1 hour ago"
                content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                atque, exercitationem quibusdam, reiciendis odio laboriosam?"
            />
            <Post
                img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                topic="Life"
                title="Lorem ipsum dolor sit amet"
                time="1 hour ago"
                content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                atque, exercitationem quibusdam, reiciendis odio laboriosam?"
            />
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

export default posts;
