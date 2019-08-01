import React from 'react';
class Comment extends React.Component {
  state = {}
  render() {
    return (
      <blockquote className="border-left">
        <p className='h5'>{this.props.comment}</p>
      </blockquote>
    );
  }
}

export default Comment;