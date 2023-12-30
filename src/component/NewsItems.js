import React from "react";
import default_news_image from "../Assets/news.jpg";

const NewsItems = ({ news }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "360px" }}
    >
      <img
        src={news.urlToImage ? news.urlToImage : default_news_image}
        style={{
          height: "200px",
          width: "340px",
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px",
        }}
        className="card-img-top"
        alt="ArticleImage"
      />
      <div className="card-body">
        <h5 className="card-title">{news.title.slice(0, 50)}...</h5>
        <p className="card-text">
          {news.description
            ? news.description.slice(0, 90)
            : "No Description Available"}
          ...
        </p>
        <a
          href={news.url}
          className="btn btn-warning"
          style={{ color: "white" }}
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItems;
