import React from 'react';
class Text extends React.Component {
  state = {}
  render() {
    return (
      <div>
        <h4>{this.props.heading}</h4>
        <p>{this.props.para}</p>
      </div>
    );
  }
}

export default Text;