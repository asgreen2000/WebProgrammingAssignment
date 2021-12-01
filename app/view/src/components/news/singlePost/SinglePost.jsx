import "./singlePost.css";
import { getSingleNews } from "../../../api/services";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function SinglePost() {

  const params = useParams();

  const [news, setNews] = useState(null);

  useEffect(() => {

    getSingleNews(params.id, setNews)
    console.log(news);
  }, params.id)

  return (
    news ?  <div className="singlePost w-75 mx-auto">
    <div className="singlePostWrapper">
      <img
        className="singlePostImg"
        src={news.image}
        alt=""
      />
      <h1 className="singlePostTitle">
        {news.title}
      </h1>
      <div className="singlePostInfo">
        <span>
          Author:
          <b className="singlePostAuthor">
              Safak
          </b>
        </span>
        <span>{news.time}</span>
      </div>
      <p className="singlePostDesc">
        {news.content}
      </p>
    </div>
  </div> :
  null
  );
}
