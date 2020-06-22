import React, { Component } from 'react';

export default class VideoItem extends Component {
  render() {
    const { state, props } = this;
    const { video } = props;
    const { url } = video;
    return (
      <div>
        <p>{url}</p>
      </div>
    );
  }
}
