import React, { Component } from 'react';
import VideoItem from './VideoItem';

export default class VideoList extends Component {
  render() {
    const { props } = this;
    const { videos } = props;

    const allVideos = videos.slice(0).reverse().map((video, i) => {
      return (
        <VideoItem
          key={video.id}
          video={video}
          index={video.length-i-1}
        />
      );
    });
  
    return <div className="videos-list">{allVideos}</div>;
  }
}
