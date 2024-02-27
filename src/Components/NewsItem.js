import React from "react";

const NewsItem = (props) => {
  let { title, description, imageURL, url, publishedAt, author, source } =
    props;
  return (
    <>
      <div className="card m-4">
        <img
          src={imageURL}
          className="card-img-top"
          alt="Alternate Text"
          height={300}
          width={300}
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {source}
            </span>
          </h5>
          <p className="card-text">
            <small className="text-muted">
              Date: {new Date(publishedAt).toGMTString()}
            </small>
            <br />
            <small className="text-muted">By: {author}</small>
          </p>
          <p className="card-text"></p>
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
};

export default NewsItem;
