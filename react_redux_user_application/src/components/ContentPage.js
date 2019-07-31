import React from 'react';
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
import Code from './ContentPageComponent/Code';
import Comment from './ContentPageComponent/Comment';
import Form from './ContentPageComponent/Form';
import Image from './ContentPageComponent/Image';
import Text from './ContentPageComponent/Text';
import Video from './ContentPageComponent/Video';
class Content extends React.Component {
  render() {
    return (
      < div className='col-sm-12' >
        {this.props.type === 'code' ? (< Code code={this.props.data.code} />) : null}
        {this.props.type === 'comment' ? (< Comment comment={this.props.data.comment} />) : null}
        {this.props.type === 'quiz' ? (< Form data={this.props.data} />) : null}
        {this.props.type === 'image' ? (<Image src={this.props.data.url} />) : null}
        {this.props.type === 'text' ? (<Text heading={this.props.data.heading} paragraph={this.props.data.paragraph} />) : null}
        {this.props.type === 'video' ? (<Video src={this.props.data.source} />) : null}
      </div >
    );
  }
}
// const mapsStatesToProps = state => ({ contentData: state.contentData });
// Content.propTypes = { readCourse: PropTypes.func.isRequired };
// export default connect(mapsStatesToProps, null)(Content);
export default Content;