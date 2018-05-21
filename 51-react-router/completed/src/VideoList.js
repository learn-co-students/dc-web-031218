import React from "react";
import { Link } from "react-router-dom";
import VideoListItem from "./VideoListItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const videoItems = videos.map(video => (
    <Link
      key={video.etag}
      to={`/video/${video.id.videoId}`}
      onClick={e => {
        e.preventDefault();
        onVideoSelect(video);
      }}
    >
      <VideoListItem video={video} />
    </Link>
  ));

  return (
    <div className="four wide column">
      <div className="ui relaxed items">{videoItems}</div>
    </div>
  );
};

export default VideoList;
