import React from 'react';

const EntertainmentItem = ({entertainmentResult}) => {
    return (
        <div>
             
        <h2 className="subtitle mb-0">
          {" "}
          <strong>
            <a
              className="urlLink"
              href={entertainmentResult.url}
              target="blank"
              style={{ color: "black" }}
            >
              {entertainmentResult.title}
            </a>
          </strong>
        </h2>
        <p style={{ textTransform: "uppercase" }}>- {entertainmentResult.author}</p>
        <br />
      </div>
    );
}

export default EntertainmentItem;
