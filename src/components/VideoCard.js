import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ snippet, id, contentDetails, statistics }) => {
  const { thumbnails, channelTitle, localized } = snippet;

  const desc = `${localized?.title.substr(0, 70)}...`;

  // const { viewCount } = statistics;
  return (
    <div className="videoCard">
      <Link to={`/watch?v=${id}`} className="videoCard-link">
        <img src={thumbnails?.medium?.url} alt="img" width="100%" />
        <p className="videoCard-desc">{desc}</p>
        <p className="videoCard-title">
          {channelTitle}
          <span
            style={{
              display: "inline-block",
              fontSize: "10px",
              color: "#000000",
              background: "#cccccc",
              borderRadius: "30px",
              padding: "2px 5px",
              marginRight: "3px",
            }}
          >
            ✔
          </span>
        </p>
        {statistics && (
          <p className="videoCard-views">
            {`${Math.trunc(statistics.viewCount / 100000)} lakh views`}
          </p>
        )}
      </Link>
    </div>
  );
};

export default VideoCard;
