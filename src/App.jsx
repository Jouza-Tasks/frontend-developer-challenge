import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.scss';

import NewVideo from './components/NewVideo';
import VideoList from './components/VideoList';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      videos: [
        {
          id: '25eae0d4-6bba-4d26-9b8f-a7bc7880f90d',
          url: 'aaaa',
        },
      ],
    };
  }

  addNewVideo=()=>{
    console.log('addNewVideo')
  }
  render() {
    const { state,addNewVideo } = this;
    const { videos } = state;

    return (
      <div className="app">
        <NewVideo addNewVideo={addNewVideo} />
        <VideoList videos={videos} />
      </div>
    );
  }
}
