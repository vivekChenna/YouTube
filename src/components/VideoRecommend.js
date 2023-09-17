import React from "react";

const VideoRecommend = ({ snippet, id, contentDetails, statistics }) => {
  const { thumbnails, channelTitle, localized } = snippet;
  const desc = `${localized?.title.substr(0, 70)}...`;
  // const { viewCount } = statistics;
  return (
    <div className="videoCard">
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
    </div>
  );
};

export default VideoRecommend;
