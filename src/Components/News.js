import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.api}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(30);
    let data = await fetch(url);
    data = await data.json();
    props.setProgress(70);
    setArticles(data.articles);
    setLoading(false);
    setTotalResults(data.totalResults);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `NewsMonger - ${capitalize(props.category)}`;
    updateNews();
    //  eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.category
    }&apiKey=${props.api}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    data = await data.json();
    setArticles(articles.concat(data.articles));
  };

  return (
    <>
      <div className="container my-2">
        <h1 className="text-center" style={{ marginTop: "90px" }}>
          NewsMonger - {capitalize(props.category)}
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner />}
        >
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageURL={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://fdn.gsmarena.com/imgroot/news/24/02/xiaomi-14-series-globla-launch-confirmed/-952x498w6/gsmarena_000.jpg"
                    }
                    url={element.url ? element.url : ""}
                    publishedAt={element.publishedAt ? element.publishedAt : ""}
                    author={element.author ? element.author : "Unknown"}
                    source={
                      element.source.name ? element.source.name : "Unknown"
                    }
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default News;
