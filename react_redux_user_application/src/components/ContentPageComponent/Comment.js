import React from 'react';
class Comment extends React.Component {
  state = {}
  render() {
    return (
      <blockquote>
        <p>{this.props.comment}</p>
      </blockquote>
    );
  }
}

export default Comment;