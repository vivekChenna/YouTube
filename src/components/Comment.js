import React from "react";

const Comment = ({ snippet }) => {
  return (
    <div className="comment-details">
      <img
        src={snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
        alt="author-img"
        className="comment-details-img"
      />
      <div>
        <p className="comment-details-auth-name">{`@${snippet?.topLevelComment?.snippet?.authorDisplayName}`}</p>
        <p className="comment-details-text">{snippet?.topLevelComment?.snippet?.textOriginal}</p>
      </div>
    </div>
  );
};

export default Comment;
