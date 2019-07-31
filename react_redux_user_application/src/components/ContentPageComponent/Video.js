import React from 'react';
class Video extends React.Component {
  state = {}
  render() {
    return (
      <iframe width="640" height="360" src={this.props.src} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
    );
  }
}

export default Video;