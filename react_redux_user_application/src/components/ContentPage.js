import React from 'react';
import Code from './ContentPageComponent/Code';
import Comment from './ContentPageComponent/Comment';
import Form from './ContentPageComponent/Form';
import Image from './ContentPageComponent/Image';
import Text from './ContentPageComponent/Text';
import Video from './ContentPageComponent/Video';
class Content extends React.Component {
  state = {}
  render() {
    return (
      <div className='col-sm-12'>
        <Code code=' xfcgvhjkljhgfdszdxcfgvhjkljhgfdsxcfvbjkuhygfg' />
        <Comment comment="dscsdcddcc" />
        <Form />
        <Image src="/card.jpg" caption='dfghjklhgf' />
        <Text heading="HEADING" para=' xfcgvhjkljhgfdszdxcfgvhjkljhgfdsxcfvbjkuhygfg' />
        <Video src="https://www.youtube.com/embed/c6t3bW7kx6E" />
        <Video src="https://www.youtube.com/embed/5A3dNQiualU" />
      </div>
    );
  }
}

export default Content;