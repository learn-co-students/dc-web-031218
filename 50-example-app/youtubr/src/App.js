import React, { Component } from "react";
import _ from "lodash";

import "./App.css";

import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import { API_KEY } from "./keys";

const response = [
  {
    etag: '"m2yskBQFythfE4irbTIeOgYYfBU/XoCknp0EO0YWZcuTVD_GhkJp_-M"',
    id: { kind: "youtube#video", videoId: "KMZ7oOCXfP8" },
    snippet: {
      title:
        "Super Smart Dolphin Answers Questions - Extraordinary Animals - Earth",
      description:
        "The Echo Location Visualization and Interface System (ELVIS) allows Dolphins to make choices and answer questions. Luna the young Dolphin grasped the ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/KMZ7oOCXfP8/default.jpg"
        }
      }
    }
  },
  {
    etag: '"m2yskBQFythfE4irbTIeOgYYfBU/z_l0ThWRPFnv9um1eRM_O1LVUqU"',
    id: { kind: "youtube#video", videoId: "3Bk6VPWGi1o" },
    snippet: {
      title: 'The Complete 2016 SeaWorld "Blue Horizons" Dolphin Show',
      description:
        "Please SUBSCRIBE by clicking here: http://www.youtube.com/subscription_center?add_user=MoneySavingVideos To see my entire SeaWorld playlist click ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/3Bk6VPWGi1o/default.jpg"
        }
      }
    }
  }
];

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchResults: [],
      selectedVideo: null
    };
  }

  fetchVideos = text => {
    let searchTerm = text;
    console.log("searched", text);
    this.setState({ selectedVideo: null, searchResults: [] });
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${searchTerm}&type=video`
    )
      .then(res => res.json())
      .then(response =>
        this.setState({
          selectedVideo: response.items[0],
          searchResults: response.items
        })
      );
  };

  updateSelected = video => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    console.log("mounted");
    this.fetchVideos("dolphin");
  }

  render() {
    let debouncedSearch = _.debounce(this.fetchVideos, 200);
    return (
      <div className="App">
        <SearchBar onChangeSearch={debouncedSearch} />
        {this.state.selectedVideo ? (
          <VideoDetail {...this.state.selectedVideo} />
        ) : (
          "Loading... purchase our products!"
        )}
        <VideoList
          selectVideo={this.updateSelected}
          videos={this.state.searchResults}
        />
      </div>
    );
  }
}

export default App;
