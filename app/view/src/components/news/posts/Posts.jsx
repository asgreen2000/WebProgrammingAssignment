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

                console.log(rows); // will print "message"
            },
            error: function (xhr, status, err) {
                console.log(err);
                console.log('error');
            }
        });
        setNews([]);
    };


    useEffect(() => {
        displayData();
    }, []);

   
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
        <li>{number}</li>
    );
    const listTests = numbers.map((test) => { test }
    );

    return (
        <div className="posts">
            {/*{newsArray.map(item => (
                <Post
                    img={item.img}
                    topic={item.topic}
                    title={item.title}
                    time={item.time}
                    content={item.content}
                />
            ))}*/}
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
            <rows/>
        </div>
    )
}

export default posts;
