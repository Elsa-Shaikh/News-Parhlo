import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";

const News = ({ category }) => {
  const [article, setArticle] = useState([]);
  const api_key = process.env.API_KEY;
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${api_key}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticle(data.articles));
    // eslint-disable-next-line
  }, [category]);

  return (
    <>
      <div className="m-1 mb-2 mt-2" style={{ fontFamily: "cursive" }}>
        <h1 className="text-center">
          Latest <span className="badge bg-danger text-light">News</span>
        </h1>
      </div>

      {article?.map((news, index) => {
        return <NewsItems key={index} news={news} />;
      })}
    </>
  );
};

export default News;
