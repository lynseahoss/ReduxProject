import React from 'react';

const FrontPageItem = ({frontPageResult}) => {
    return (
        <div>
             
      <h2 className="subtitle mb-0">
        {" "}
        <strong>
          <a
            className="urlLink"
            href={frontPageResult.url}
            target="blank"
            style={{ color: "black" }}
          >
            {frontPageResult.title}
          </a>
        </strong>
      </h2>
      <p style={{ textTransform: "uppercase" }}>- {frontPageResult.author}</p>
      <br />
    </div>
    
    );
}

export default FrontPageItem;
