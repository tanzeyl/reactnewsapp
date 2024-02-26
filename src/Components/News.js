import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  pages = 0;
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f77cff6e35f74a59856457c6691924c7&page=1&pageSize=20`;
    let data = await fetch(url);
    data = await data.json();
    this.pages = Math.ceil(data.totalResults / 20);
    this.setState({ articles: data.articles });
  }

  handleNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f77cff6e35f74a59856457c6691924c7&page=${
      this.state.page + 1
    }&pageSize=20`;
    let data = await fetch(url);
    data = await data.json();
    this.setState({ page: this.state.page + 1, articles: data.articles });
  };

  handlePrevious = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f77cff6e35f74a59856457c6691924c7&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    data = await data.json();
    this.setState({ page: this.state.page - 1, articles: data.articles });
  };

  render() {
    return (
      <>
        <div className=" container my-2">
          <h1>NewsMonger - Top Headlines</h1>
          <div className="row">
            {this.state.articles.map((element) => {
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
                  />
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              className="btn btn-lg btn-dark"
              onClick={this.handlePrevious}
            >
              &larr; Previous
            </button>
            <button
              disabled={this.state.page >= this.pages}
              className="btn btn-lg btn-dark"
              onClick={this.handleNext}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
