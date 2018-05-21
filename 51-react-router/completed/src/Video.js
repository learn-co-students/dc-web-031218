import React from "react";
import VideoDetail from "./VideoDetail";

const Video = props => {
  return (
    <div>
      <VideoDetail video={props.selectedVideo} />
    </div>
  );
};

export default Video;
