import "./post.css";

import { Link } from "react-router-dom";

export default function Post({ img, topic, title, time, content }) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            {topic}
          </span>
        </div>
        <span className="postTitle">
          <Link to="post/1" className="link">
            {title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{time}</span>
      </div>
      <p className="postDesc">
        {content}
      </p>
    </div>
  );
}
