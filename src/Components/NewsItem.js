import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageURL, url } = this.props;
    return (
      <>
        <div className="card m-2" style={{ width: "18rem" }}>
          <img
            src={imageURL}
            className="card-img-top"
            alt="Alternate Text"
            height={300}
            width={300}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
