import React from "react";
import VideoListItem from "./VideoListItem";

const VideoList = props => {
  return (
    <div>
      {props.videos.map(video => (
        <VideoListItem
          key={video.id.videoId}
          clickHandler={() => props.selectVideo(video)}
          {...video}
        />
      ))}
    </div>
  );
};

export default VideoList;
