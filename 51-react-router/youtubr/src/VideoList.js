import React from 'react'
import VideoListItem from './VideoListItem'

const VideoList = ({videos, onVideoSelect}) => {
  const videoItems =
    videos.map(video =>
      <VideoListItem
        key={video.etag}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    )

  return (
    <div className="four wide column">
      <div className="ui relaxed items">
        {videoItems}
      </div>
    </div>
  )
}

export default VideoList
