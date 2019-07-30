import React from 'react';
class Video extends React.Component {
  state = {}
  render() {
    return (
      <iframe width="180%" height="500" src={this.props.src} border="2" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
    );
  }
}

export default Video;