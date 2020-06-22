import React, { Component } from 'react';

export default class NewVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoBody: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddNewVideo = () => {
    const { videoBody, videoColor } = this.state;
    this.props.addNewVideo(videoBody);
    this.setState({ videoBody: '' });
  };

  render() {
    const { state, handleInputChange, handleAddNewVideo } = this;
    const { videoBody } = state;

    return (
      <div>
        <div>
          <label>Video Text</label>
          <input
            type="text"
            name="videoBody"
            value={videoBody}
            onChange={handleInputChange}
            placeholder="Body for New Video..."
          />
        </div>

        <div>
          <button onClick={handleAddNewVideo}>ADD VIDEO</button>
        </div>
      </div>
    );
  }
}
