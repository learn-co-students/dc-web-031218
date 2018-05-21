import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

const Search = props => {
  return (
    <div className="ui grid container">
      <SearchBar onSearchChange={props.search} />
      <VideoList
        onVideoSelect={video => {
          props.selectVideo(video);
          props.history.push(`/video/${video.id.videoId}`);
        }}
        videos={props.videos}
      />
    </div>
  );
};
export default Search;
