import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import SearchBar from "./SearchBar";
import Login from "./Login";

import { API_KEY } from "./keys";
import _ from "lodash";

class YouTubeContainer extends Component {
  constructor() {
    super();

    this.state = {
      videos: [],
      selectedVideo: null
    };
  }

  componentDidMount() {
    this.videoSearch();
  }

  videoSearch(term) {
    const searchTerm = term || "dolphin";

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${searchTerm}&type=video`
    )
      .then(res => res.json())
      .then(response => {
        const videos = response.items;
        this.setState({
          videos,
          selectedVideo: videos[0]
        });
      });
  }

  render() {
    //_.debounce returns passed callback function that can
    // only be run every 200 milliseconds
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 200);

    return (
      <div className="ui grid container">
        <Switch>
          <Route path="/login" component={Login} />
          <Route
            path={["/video/:videoId", "/search"]}
            render={props => {
              return (
                <div>
                  <SearchBar onSearchChange={term => videoSearch(term)} />

                  <VideoDetail video={this.state.selectedVideo} />

                  <VideoList
                    videos={this.state.videos}
                    onVideoSelect={selectedVideo => {
                      props.history.push(`/video/${selectedVideo.id.videoId}`);
                      this.setState({ selectedVideo });
                    }}
                  />
                </div>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default YouTubeContainer;
