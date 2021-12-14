import React, { useState, useEffect } from "react";
import "./../App.css";
import Loading from "./Loading";

const News = ({ cat, apiKey }) => {
  let [newsapi, setNewsapi] = useState([]);
  let [page, setPage] = useState(1);
  let [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const getNews = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.currentsapi.services/v1/search?apiKey=lEmOc5ny7vKnv9bZrQmZ-pu6cEP1fIytUqF_hdZsYXgOoS01&category=${cat}&page_number=${page}`
    );
    let data = await response.json();
    console.log(data)
    setNewsapi(data.news);
    setLoading(false);
  };
  useEffect(() => {
    getNews();
    // eslint-disable-next-line
  }, []);

  const Next = async () => {
    setLoading(true);
    setPage(page+1)
    const response = await fetch(
      `https://api.currentsapi.services/v1/search?apiKey=lEmOc5ny7vKnv9bZrQmZ-pu6cEP1fIytUqF_hdZsYXgOoS01&category=${cat}&page_number=${page+1}`
    );
   
    let data = await response.json();
    setNewsapi(data.news);
    setLoading(false);
    console.log(page)

  };
  const Prev = async () => {
    setLoading(true);
    setPage(page-1)
    const response = await fetch(
      `https://api.currentsapi.services/v1/search?apiKey=lEmOc5ny7vKnv9bZrQmZ-pu6cEP1fIytUqF_hdZsYXgOoS01&category=${cat}&page_number=${page-1}`
    );
    let data = await response.json();
    setNewsapi(data.news);
    setLoading(false);
    console.log(page)
  };

  // const fetchData = async () => {
  //   setPage(page + 1);
  //   const response = await fetch(
  //     `https://api.currentsapi.services/v1/search?apiKey=${apiKey}&category=${cat}&page_number=${page}`
  //   );
  //   let data = await response.json();
  //   setNewsapi(newsapi.concat(data.news));
  //   setTotalResults(data.totalResults);
  // };
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <h1 id="top" style={{ textAlign: "center" }}>
        Top News On {capitalizeFirstLetter(cat)}
      </h1>
      
      <form className="d-flex mx-5 my-5">
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
      <div className="pagination my-3">
        <button className="btn btn-primary" disabled={page <= 1} onClick={Prev}>
          Previous
        </button>
        <button className="btn btn-primary" onClick={Next}>
          Next
        </button>
      </div>
      {loading ? <Loading /> : " "}
      
      <div className="box-card">
        {!loading &&
          newsapi
          // eslint-disable-next-line
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
                       element.image === "None"
                        ? "https://i2.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1"
                        : element.image
                    }
                    alt={element.author}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      {element.published.slice(0, 11)}
                    </p>
                    <p className="card-text">{element.author}</p>
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
      <div className="pagination my-3">
        <button className="btn btn-primary" disabled={page <= 1} onClick={Prev}>
          Previous
        </button>
        <button className="btn btn-primary" onClick={Next}>
          Next
        </button>
      </div>
    </>
  );
};

export default News;
