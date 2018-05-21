import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <div
      className="item"
      style={{ cursor: "pointer" }}
      onClick={() => onVideoSelect(video)}
    >
      <div className="ui small image">
        <img alt={video.snippet.title} src={imageUrl} />
      </div>
      <div className="content">{video.snippet.title}</div>
    </div>
  );
};

export default VideoListItem;
