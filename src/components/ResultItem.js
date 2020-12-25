import React from "react";

const ResultItem = ({ searchResult }) => {
  return (
    <div>
      <h2 className="subtitle mb-0">
        {" "}
        <strong>
          <a
            className="urlLink"
            href={searchResult.url}
            target="blank"
            style={{ color: "black" }}
          >
            {searchResult.title}
          </a>
        </strong>
      </h2>
      <p style={{ textTransform: "uppercase" }}>- {searchResult.author}</p>
      <br />
    </div>
  );
};

export default ResultItem;
