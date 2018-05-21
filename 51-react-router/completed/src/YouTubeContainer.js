import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { API_KEY } from "./keys";
import _ from "lodash";

import Search from "./Search";
import Login from "./Login";
import Video from "./Video";

class YouTubeContainer extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      videos: [],
      selectedVideo: null
    };
  }

  componentDidMount() {
    if (this.props.match) {
      if (this.props.match.params["query"]) {
        this.videoSearch(this.props.match.params["query"]);
      }
      if (this.props.match.params["id"]) {
        this.videoGet(this.props.match.params["id"]);
      }
    }
  }

  selectVideo = selectedVideo => {
    this.setState({ selectedVideo });
  };

  videoGet = id => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${API_KEY}&id=${id}&type=video`
    )
      .then(res => res.json())
      .then(json => this.setState({ selectedVideo: json.items[0] }));
  };

  videoSearch = _.debounce(searchTerm => {
    this.props.history.push(`/search/${searchTerm}`);

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
  }, 200);

  // Routes
  // /                - home (recommended videos)
  // /login           - login page
  // /search/:query   - search
  // /video/:id       - video detail page

  render() {
    return (
      <div className="ui grid container">
        <Switch>
          <Route path="/login" component={Login} />
          <Route
            path="/search/:query?"
            render={props => (
              <Search
                search={this.videoSearch}
                selectVideo={this.selectVideo}
                {...props}
                {...this.state}
              />
            )}
          />
          <Route
            path="/video/:id"
            render={props => <Video {...props} {...this.state} />}
          />
          <Route path="/" render={props => <Redirect to="/search" />} />
        </Switch>
      </div>
    );
  }
}

export default YouTubeContainer;
