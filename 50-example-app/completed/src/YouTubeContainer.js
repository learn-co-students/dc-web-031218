import React, { Component } from "react";

import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import SearchBar from "./SearchBar";

import { API_KEY } from "./keys";
import _ from "lodash";

class YouTubeContainer extends Component {
  constructor() {
    super();

    this.state = {
      term: "dolphin",
      videos: [],
      selectedVideo: null
    };
  }

  componentDidMount() {
    this.videoSearch(this.state.term);
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
        <SearchBar onSearchChange={term => videoSearch(term)} />

        <VideoDetail video={this.state.selectedVideo} />

        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
      </div>
    );
  }
}

// const response = [
//   {
//     etag: '"m2yskBQFythfE4irbTIeOgYYfBU/XoCknp0EO0YWZcuTVD_GhkJp_-M"',
//     id: { kind: 'youtube#video', videoId: 'KMZ7oOCXfP8' },
//     snippet: {
//       title:
//         'Super Smart Dolphin Answers Questions - Extraordinary Animals - Earth',
//       description:
//         'The Echo Location Visualization and Interface System (ELVIS) allows Dolphins to make choices and answer questions. Luna the young Dolphin grasped the ...',
//       thumbnails: {
//         default: {
//           url: 'https://i.ytimg.com/vi/KMZ7oOCXfP8/default.jpg'
//         }
//       }
//     }
//   },
//   {
//     etag: '"m2yskBQFythfE4irbTIeOgYYfBU/z_l0ThWRPFnv9um1eRM_O1LVUqU"',
//     id: { kind: 'youtube#video', videoId: '3Bk6VPWGi1o' },
//     snippet: {
//       title: 'The Complete 2016 SeaWorld "Blue Horizons" Dolphin Show',
//       description:
//         'Please SUBSCRIBE by clicking here: http://www.youtube.com/subscription_center?add_user=MoneySavingVideos To see my entire SeaWorld playlist click ...',
//       thumbnails: {
//         default: {
//           url: 'https://i.ytimg.com/vi/3Bk6VPWGi1o/default.jpg'
//         }
//       }
//     }
//   }
// ];

export default YouTubeContainer;
