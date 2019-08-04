import React from 'react';
import Code from './Code';
import Comment from './Comment';
import Form from './Form';
import Image from './Image';
import Text from './Text';
import Video from './Video';
class Content extends React.Component {
  render() {
    return (
      < div className=''>
        {this.props.type === 'code' ? (< Code code={this.props.data.data.code} />) : null}
        {this.props.type === 'comment' ? (< Comment comment={this.props.data.data.comment} />) : null}
        {this.props.type === 'quiz' ? (< Form data={this.props.data.data} />) : null}
        {this.props.type === 'image' ? (<Image src={this.props.data} alt='' />) : null}
        {this.props.type === 'text' ? (<Text heading={this.props.data.data.heading} paragraph={this.props.data.data.paragraph} />) : null}
        {this.props.type === 'video' ? (<Video src={this.props.data.id} />) : null}
      </div >
    );
  }
}
export default Content;