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
      <br />
    </div>
  );
};

export default ResultItem;
