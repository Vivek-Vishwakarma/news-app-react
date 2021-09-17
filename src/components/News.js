import React, { useState, useEffect } from "react";
import "./../App.css";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({ size, country, cat, apiKey }) => {
  let [news, setNews] = useState([]);
  let [page, setPage] = useState(1);
  let [loading, setLoading] = useState([]);
  let [totalResults, setTotalResults] = useState(0);
  const [search, setSearch] = useState("");

  const getNews = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${cat}&apiKey=${apiKey}&page=${page}&pageSize=${size}`
    );
    setLoading(true);

    let data = await response.json();
    setNews(data.articles);
    setLoading(false);
  };
  useEffect(() => {
    // eslint-disable-next-line
    getNews();
    // eslint-disable-next-line
  }, []);

  // const Next = async () => {
  //   const response = await fetch(
  //     `https://newsapi.org/v2/top-headlines?country=${country}&category=${cat}&apiKey=${apiKey}&page=${
  //       page + 1
  //     }&pageSize=${size}`
  //   );
  //   setLoading(true);

  //   let data = await response.json();
  //   if (page + 1 > Math.ceil(data.totalResults / 9)) {
  //     alert("No more news");
  //     setLoading(false);
  //   } else {
  //     setPage(page + 1);

  //     setNews(data.articles);
  //     setLoading(false);
  //   }
  // };
  // const Prev = async () => {
  //   setPage(page - 1);
  //   const response = await fetch(
  //     `https://newsapi.org/v2/top-headlines?country=${country}&category=${cat}&apiKey=${apiKey}&page=${
  //       page - 1
  //     }&pageSize=${size}`
  //   );
  //   setLoading(true);

  //   let data = await response.json();
  //   setNews(data.articles);
  //   setLoading(false);
  // };

  const fetchData = async () => {
    setPage(page + 1);
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${cat}&apiKey=${apiKey}&page=${
        page + 1
      }&pageSize=${size}`
    );
    let data = await response.json();
    setNews(news.concat(data.articles));
    setTotalResults(data.totalResults);
  };
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <h1 id="top" style={{ textAlign: "center" }}>
        Top News On {capitalizeFirstLetter(cat)}
      </h1>
      <form className="d-flex mx-5">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search..."
          aria-label="Search"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </form>
      <InfiniteScroll
        dataLength={news.length}
        next={fetchData}
        hasMore={news.lenght !== totalResults}
        loader={<Loading />}
      >
        <div className="box-card">
          {!loading &&
            news
              .filter((val) => {
                if (search === "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((element) => {
                return (
                  <div className="card" key={element.url}>
                    <img
                      loading="lazy"
                      className="card-img-top"
                      src={
                        !element.urlToImage
                          ? "https://img.lovepik.com/element/40021/7866.png_860.png"
                          : element.urlToImage
                      }
                      alt="xyz"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        {element.publishedAt.slice(0, 10)}
                      </p>
                      <p className="card-text">{element.source.name}</p>
                      <h5 className="card-title">
                        {element.title ? element.title.slice(0, 80) : ""}
                      </h5>
                      <p className="card-text">
                        {element.description
                          ? element.description.slice(0, 130)
                          : ""}
                      </p>
                      <a
                        rel="noreferrer"
                        href={element.url}
                        target="_blank"
                        className="btn btn-primary"
                      >
                        Explore &#8594;
                      </a>
                    </div>
                  </div>
                );
              })}
        </div>
      </InfiniteScroll>
      {/* // <div className="pagination my-3">
      //   <button className="btn btn-primary" disabled={page <= 1} onClick={Prev}>
      //     Previous
      //   </button>
      //   <button className="btn btn-primary" onClick={Next}>
      //     Next
      //   </button>
      // </div> */}
    </>
  );
};

export default News;
