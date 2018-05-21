import React from "react";

// {description: string, title: string, thumbnails: {}}
// { video: { snippet: ... }}
const VideoListItem = ({ etag, id, snippet, clickHandler }) => {
  return (
    <div onClick={clickHandler}>
      <img
        alt={`thumbnail for ${snippet.title}`}
        src={snippet.thumbnails.default.url}
      />
      <a>{snippet.title}</a>
      <p>{snippet.description}</p>
    </div>
  );
};

export default VideoListItem;
